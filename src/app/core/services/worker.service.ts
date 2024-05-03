// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class WorkerService {

   constructor() { }


   writeWorkers(worker: any) {
    const workersData = worker;
    console.log( workersData);



  }

  getWorkers(): void {

  }
  addWorker(): void{

  }
}
