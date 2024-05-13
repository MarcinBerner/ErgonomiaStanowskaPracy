import { Component, inject } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';
import { Worker } from '../core/interfaces/worker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

 constructor(private workerService: WorkerService, private _formBuilder: FormBuilder){}

 test():void{
 }
 saveData(): void{
  if(this.personalData.valid){
  this.worker.name = this.personalData.value.name!;
  this.worker.surname = this.personalData.value.surname!;
  this.workerService.writeWorkers(this.worker);
  }
 }

 personalData = this._formBuilder.group({
  name: ['', Validators.required],
  surname: ['', Validators.required],

});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
isLinear = false;

}
