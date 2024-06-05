import { Component, inject } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';
import { Worker } from '../core/classes/workerClass';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {

worker = new Worker();



 constructor(private workerService: WorkerService, private _formBuilder: FormBuilder){}

 test():void{
 }
 saveData(): void{
  if(this.personalData.valid){
  this.getData();
  const workerData = {
    name: this.worker.name,
    surname: this.worker.surname,
    questions: this.worker.questions,
  }
 this.workerService.writeWorkers(workerData);
  }
 }

 personalData = this._formBuilder.group({
  name: ['', Validators.required],
  surname: ['', Validators.required],

});
firstQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
secondQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
thirdQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
fourthQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
fifthQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
sixthQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
seventhQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
eighthQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
ninethQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
tenthQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
eleventhQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
twelvethQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
thirteenthQuestion = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});

isLinear = false;
getData(){
    this.worker.name = this.personalData.value.name!;
    this.worker.surname = this.personalData.value.surname!;

}

}
