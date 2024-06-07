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

  constructor(
    private workerService: WorkerService,
    private _formBuilder: FormBuilder
  ) {}



  personalData = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
  });
  firstQuestion = this._formBuilder.group({
    seatHeight: ['', Validators.required],
    seatHeightExtraFirst: [''],
    seatHeightExtraSecond: [''],
  });
  secondQuestion = this._formBuilder.group({
    seatDepth: ['', Validators.required],
    seatDepthExtra: [''],
  });
  thirdQuestion = this._formBuilder.group({
    chairTime: ['', Validators.required],
  });
  fourthQuestion = this._formBuilder.group({
    armrests: ['', Validators.required],
    armrestsExtraFirst: [''],
    armrestsExtraSecond: [''],
    armrestsExtraThird: [''],

  });
  fifthQuestion = this._formBuilder.group({
    chairBackrest: ['', Validators.required],
    chairBackrestExtra: [''],
  });
  sixthQuestion = this._formBuilder.group({
    screen: ['', Validators.required],
    screenExtraFirst: [''],
    screenExtraSecond: [''],
    screenExtraThird: [''],
    screenExtraFourth: [''],
  });
  seventhQuestion = this._formBuilder.group({
    screenTime: ['', Validators.required],
  });
  eighthQuestion = this._formBuilder.group({
    phone: ['', Validators.required],
    phoneExtraFirst: [''],
    phoneExtraSecond: [''],
  });
  ninethQuestion = this._formBuilder.group({
    phoneTime: ['', Validators.required],
  });
  tenthQuestion = this._formBuilder.group({
    mouse: ['', Validators.required],
    mouseExtraFirst: [''],
    mouseExtraSecond: [''],
    mouseExtraThird: [''],

  });
  eleventhQuestion = this._formBuilder.group({
    mouseTime: ['', Validators.required],
  });
  twelvethQuestion = this._formBuilder.group({
    keyboard: ['', Validators.required],
    keyboardExtraFirst: [''],
    keyboardExtraSecond: [''],
    keyboardExtraThird: [''],
    keyboardExtraFourth: [''],
  });
  thirteenthQuestion = this._formBuilder.group({
    keyboardTime: ['', Validators.required],
  });

  isLinear = false;
  getData(): void {
    this.worker.name = this.personalData.value.name!;
    this.worker.surname = this.personalData.value.surname!;
    console.log(this.firstQuestion.value);
  }
  saveData(): void {
    if (this.personalData.valid) {
      this.getData();
      const workerData = {
        name: this.worker.name,
        surname: this.worker.surname,
        questions: this.worker.questions,
      };
      this.workerService.writeWorkers(workerData);
    }
  }
  doTheMath(): void {
    
  }
}
