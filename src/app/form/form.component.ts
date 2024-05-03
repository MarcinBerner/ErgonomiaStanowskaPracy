import { Component, inject } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';
import { Worker } from '../core/interfaces/worker';

// import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {

  worker: Worker = {
    name: '',
    surname: ''
  };


 constructor(private workerService: WorkerService){}
 test():void{
 }
 saveData(): void{
  this.workerService.writeWorkers(this.worker);
 }

}
