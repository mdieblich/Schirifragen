import { Injectable } from '@angular/core';

import { QuestionResult } from './question-result';
import { SessionUserData } from './session-user-data';
import { Question } from './question';

@Injectable()
export class UserService {
    // TODO: in IndexedDB auslagern!
    // TODO: Prüfen, ob LocalStorage/SessionStorage überhaupt zur Verfügung stehen

  db?: IDBDatabase;


  constructor() {
    try {
      this.openIndexedDB()
    } catch (error){
      this.notifyThatIndexedDBisNotUsable(error);
    }
  }
  
  private notifyThatIndexedDBisNotUsable(error: Error): void{
    alert(
      "IndexedDB kann nicht verwendet werden.\n" + 
      "Daher können Sie die Langzeitauswertung ihrer Antworten nicht benutzen.\n"+
      "\n"+
      "Ursache:\n"
      +error);
  }

  // TODO Typ von Event klären
  private handleDBError(event){
    console.log("Datenbankfehler", event);
    alert("Datenbankfehler\n"+
          "Fehlercode: " + event.target.errorCode);
  }

  private openIndexedDB(): void {
    if (!window.indexedDB) {
      throw new Error("Ihr Browser unterstützt keine stabile Version von IndexedDB.");
    } else {
      const request: IDBOpenDBRequest = window.indexedDB.open("Schirifragen: Antworten", 4);
      request.onerror = () => this.notifyThatIndexedDBisNotUsable(new Error("Der Zugriff auf die lokale Browserdatenbank wurde verweigert."));
      request.onsuccess = () => {
        console.log("Datenbank bereit");
        this.db = request.result;
        this.db.onerror = this.handleDBError;
      };
      request.onupgradeneeded = (event: any) => {
        const dbForUpdate = event.target.result;
        const questionResultObjectStore: IDBObjectStore = dbForUpdate.createObjectStore("QuestionResult", { keyGenerator: "id", autoIncrement: true});
        questionResultObjectStore.createIndex("question", "question", { unique: false });
        questionResultObjectStore.createIndex("date", "date", { unique: false });
        questionResultObjectStore.createIndex("score", "score", { unique: false });
      }
    }
  }

  private getQuestionResultObjectStore(): IDBObjectStore {
    const transaction: IDBTransaction = this.db.transaction(["QuestionResult"], "readwrite");
    transaction.onerror = this.handleDBError;
    return transaction.objectStore("QuestionResult");;
  }

  listAllQuestionsFromId(lowerBound: number): void {
    const questionIndex: IDBIndex= this.getQuestionResultObjectStore().index('question');
    questionIndex.openCursor(IDBKeyRange.lowerBound(lowerBound)).onsuccess = (event: any) => {
      const cursor = event.target.result;
        if(cursor) {
          console.log(cursor.value);
          cursor.continue();
        } else {
          console.log('Fertig!');
        }
      };
  }

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

  addQuestionResult(questionId: number, result: QuestionResult): void {
    this.getQuestionResultObjectStore().add(result);

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
