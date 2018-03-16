import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { QuestionResult } from './question-result';
import { SessionUserData } from './session-user-data';
import { Question } from './question';
import { QuestionPerformance } from './question-performance';
import { Subscriber } from 'rxjs/Subscriber';
import { IndexedDbService } from './indexed-db.service';

@Injectable()
export class UserService {
    // TODO: Prüfen, ob LocalStorage/SessionStorage überhaupt zur Verfügung stehen

  constructor(private indexedDBService: IndexedDbService) {
  }

  // TODO Typ von Event klären
  private handleDBError(event){
    console.log("Datenbankfehler", event);
    alert("Datenbankfehler\n"+
          "Fehlercode: " + event.target.errorCode);
  }

  private getIndexedDB(): Observable<IDBDatabase>{
    return this.indexedDBService.getIndexedDB("Schirifragen: Antworten", 4, this.updateDB);
  }

  // event: IDBVersionChangeEvent ???
  private updateDB(event:any): void{
    const dbForUpdate = event.target.result;
    const questionResultObjectStore: IDBObjectStore = dbForUpdate.createObjectStore("QuestionResult", { keyGenerator: "id", autoIncrement: true});
    questionResultObjectStore.createIndex("question", "question", { unique: false });
    questionResultObjectStore.createIndex("date", "date", { unique: false });
    questionResultObjectStore.createIndex("score", "score", { unique: false });
  }
  
  public getAllQuestionResults(): Observable<QuestionResult> {
    let emitter: Subscriber<QuestionResult>;
    
    this.getIndexedDB().subscribe(db => {
      const transaction: IDBTransaction = db.transaction(["QuestionResult"], "readwrite");
      const questionResultStore: IDBObjectStore = transaction.objectStore("QuestionResult");
      const questionIndex: IDBIndex = questionResultStore.index('question');
      questionIndex.openCursor().onsuccess = (event: any) => {
          const cursor = event.target.result;
            if(cursor) {
              const result: QuestionResult = cursor.value;
              emitter.next(result);
              cursor.continue();
            }
            else{
              emitter.complete();
            }
        };
    });
    return Observable.create(e => emitter = e);
  }
  // public getAllWrongQuestions(): Observable<QuestionPerformance[]> {

  // }

  private operateOnSessionData(action: (sessionData: SessionUserData) => void): void {
    // TODO: Besserer Name als "sessionData". Total nichtssagend

    this.readSessionData(
      sessionData => {
        action(sessionData);
        sessionStorage.setItem("user", JSON.stringify(sessionData));
      }
    );
  }

  private readSessionData(action: (sessionData: SessionUserData) => void): void {
    let sessionData: SessionUserData = JSON.parse(sessionStorage.getItem("user"));
    if(!sessionData){
      sessionData = {
        questionsAnswered: [],
        results: []
      };
    }
    action(sessionData);
  }

  public addQuestionResult(questionId: number, result: QuestionResult): void {

    this.getIndexedDB().subscribe(db => {
      const transaction: IDBTransaction = db.transaction(["QuestionResult"], "readwrite");
      const questionResultStore: IDBObjectStore = transaction.objectStore("QuestionResult");
      questionResultStore.add(result);
    });

    this.operateOnSessionData(sessionData => {
      sessionData.questionsAnswered.push(questionId);
      sessionData.results[questionId] = result;
    });
  }

  getAnsweredQuestions(): Set<number> {
    let answeredQuestions = new Set<number>();
    this.readSessionData(sessionData => {
      sessionData.questionsAnswered.forEach(questionId => answeredQuestions.add(questionId));
    });
    return answeredQuestions;
  }

  getQuestionResults(): QuestionResult[] {
    let results: QuestionResult[];
    this.readSessionData(sessionData => {
      results = sessionData.results;
    });
    return results;
  }

  clearOldAnsweredQuestions(): void {
    this.operateOnSessionData(
      sessionData => {
        sessionData.questionsAnswered = [];
      }
    );
  }
}
