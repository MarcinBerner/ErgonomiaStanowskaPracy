// import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class WorkerService {

   constructor() { }
   firestore:Firestore = inject(Firestore);


   writeWorkers(worker: any) {
    const workersData = worker;
    console.log( workersData);
    const acollection = collection(this.firestore, 'workers');
    addDoc(acollection, workersData);



  }

  getWorkers(): void {

  }
  addWorker(): void{

  }
}
