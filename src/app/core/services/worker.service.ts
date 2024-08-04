// import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor() {}
  firestore: Firestore = inject(Firestore);


  writeWorkers(worker: any) {
    const workersData = worker;
    console.log(workersData);
    const acollection = collection(this.firestore, 'workers');
    addDoc(acollection, workersData);
  }
   async fetchWorkers(): Promise<any[]> {
    const acollection = collection(this.firestore, 'workers');
    const snapshot = await getDocs(acollection);
    const workersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return workersList;
   }
}
