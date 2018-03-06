import { Injectable } from '@angular/core';

import { LongTimeUserData } from './long-time-user-data';
import { QuestionResult } from './question-result';
import { QuestionResultHistory } from './question-result-history';
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
      const request: IDBOpenDBRequest = window.indexedDB.open("Schirifragen: Antworten", 2);
      request.onerror = () => this.notifyThatIndexedDBisNotUsable(new Error("Der Zugriff auf die lokale Browserdatenbank wurde verweigert."));
      request.onsuccess = () => {
        console.log("Datenbank bereit");
        this.db = request.result;
        this.db.onerror = this.handleDBError;
      };
      request.onupgradeneeded = (event: any) => {
        const dbForUpdate = event.target.result;
        const objectStore = dbForUpdate.createObjectStore("answers", { keyGenerator: "id" });
        objectStore.createIndex("frage", "frage", { unique: false });
        objectStore.createIndex("timestamp", "timestamp", { unique: false });
        // objectStore.createIndex("score", "score", { unique: false });  // score nicht als index
        // TODO Datenbankupgrades

      }
    }
  }

  private operateOnLongTimeData(action: (longTimeData: LongTimeUserData) => void): void{
    // TODO: Besserer Name als "LongTimeData". Total nichtssagend

    let longTimeData: LongTimeUserData = JSON.parse(localStorage.getItem("user"));
    if(!longTimeData){
      longTimeData = {results: {}};
    }

    action(longTimeData);

    localStorage.setItem("user", JSON.stringify(longTimeData));
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
    this.operateOnLongTimeData( longTimeData => {
      let resultHistory: QuestionResultHistory = longTimeData.results[questionId];
      if(!resultHistory){
          resultHistory = {questionResults: []};
          longTimeData.results[questionId] = resultHistory;
      }
      resultHistory.questionResults.push(result);
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
