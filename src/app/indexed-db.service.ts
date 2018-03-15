import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class IndexedDbService {

  db?: IDBDatabase;

  constructor() { }
  
  public getIndexedDB(dbName: string, dbVersion: number, upgradeCallBack?: (event:IDBVersionChangeEvent)=>any): Observable<IDBDatabase>{

    if(this.db) {
      return of(this.db);
    } else {
      let emitter: Subscriber<IDBDatabase>;

      if (!window.indexedDB) {
        emitter.error(new Error("Ihr Browser unterstützt keine stabile Version von IndexedDB."));
      } else {
        const request: IDBOpenDBRequest = window.indexedDB.open(dbName, dbVersion);
        request.onerror = (event: Event) => {
          emitter.error(new Error("Der Zugriff auf die lokale Browserdatenbank wurde verweigert."));
        };
        request.onsuccess = () => {
          this.db = request.result;
          emitter.next(this.db);
          emitter.complete();
        };
        request.onupgradeneeded = upgradeCallBack;
      }
      return Observable.create(e => emitter = e);
    }
  }

  public getObjectStore(db:Observable<IDBDatabase>, objectStoreName: string): Observable<IDBObjectStore> {

    let emitter: Subscriber<IDBObjectStore> = new Subscriber<IDBObjectStore>();

    db.subscribe(db => {
      const transaction: IDBTransaction = db.transaction(["QuestionResult"], "readwrite");
      transaction.onerror = emitter.error;
      emitter.next(transaction.objectStore("QuestionResult"));
      emitter.complete();
    }, emitter.error);

    return Observable.create(e => emitter = e);
  }

}
