import { Component, inject } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';
import { Worker } from '../core/classes/workerClass';
import { FormBuilder, Validators } from '@angular/forms';

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
    this.worker.questions[0].answers[0] =
      this.firstQuestion.value.seatHeight === '1';
    this.worker.questions[0].answers[1] =
      this.firstQuestion.value.seatHeight === '2';
    this.worker.questions[0].answers[2] =
      this.firstQuestion.value.seatHeight === '3';
    this.worker.questions[0].answers[3] =
      this.firstQuestion.value.seatHeight === '4';
    this.worker.questions[0].answers[4] =
      !!this.firstQuestion.value.seatHeightExtraFirst || false;
    this.worker.questions[0].answers[5] =
      !!this.firstQuestion.value.seatHeightExtraSecond || false;

    this.worker.questions[1].answers[0] =
      this.secondQuestion.value.seatDepth === '1';
    this.worker.questions[1].answers[1] =
      this.secondQuestion.value.seatDepth === '2';
    this.worker.questions[1].answers[2] =
      this.secondQuestion.value.seatDepth === '3';
    this.worker.questions[1].answers[3] =
      !!this.secondQuestion.value.seatDepthExtra || false;

    this.worker.questions[2].answers[0] =
      this.thirdQuestion.value.chairTime === '1';
    this.worker.questions[2].answers[1] =
      this.thirdQuestion.value.chairTime === '2';
    this.worker.questions[2].answers[2] =
      this.thirdQuestion.value.chairTime === '3';

    this.worker.questions[3].answers[0] =
      this.fourthQuestion.value.armrests === '1';
    this.worker.questions[3].answers[1] =
      this.fourthQuestion.value.armrests === '2';
    this.worker.questions[3].answers[2] =
      this.fourthQuestion.value.armrests === '3';
    this.worker.questions[3].answers[3] =
      !!this.fourthQuestion.value.armrestsExtraFirst || false;
    this.worker.questions[3].answers[4] =
      !!this.fourthQuestion.value.armrestsExtraSecond || false;
    this.worker.questions[3].answers[5] =
      !!this.fourthQuestion.value.armrestsExtraThird || false;

    this.worker.questions[4].answers[0] =
      this.fifthQuestion.value.chairBackrest === '1';
    this.worker.questions[4].answers[1] =
      this.fifthQuestion.value.chairBackrest === '2';
    this.worker.questions[4].answers[2] =
      this.fifthQuestion.value.chairBackrest === '3';
    this.worker.questions[4].answers[3] =
      this.fifthQuestion.value.chairBackrest === '4';
    this.worker.questions[4].answers[4] =
      !!this.fifthQuestion.value.chairBackrestExtra || false;

    this.worker.questions[5].answers[0] =
      this.sixthQuestion.value.screen === '1';
    this.worker.questions[5].answers[1] =
      this.sixthQuestion.value.screen === '2';
    this.worker.questions[5].answers[2] =
      this.sixthQuestion.value.screen === '3';
    this.worker.questions[5].answers[3] =
      !!this.sixthQuestion.value.screenExtraFirst || false;
    this.worker.questions[5].answers[4] =
      !!this.sixthQuestion.value.screenExtraSecond || false;
    this.worker.questions[5].answers[5] =
      !!this.sixthQuestion.value.screenExtraThird || false;
    this.worker.questions[5].answers[6] =
      !!this.sixthQuestion.value.screenExtraFourth || false;

    this.worker.questions[6].answers[0] =
      this.seventhQuestion.value.screenTime === '1';
    this.worker.questions[6].answers[1] =
      this.seventhQuestion.value.screenTime === '2';
    this.worker.questions[6].answers[2] =
      this.seventhQuestion.value.screenTime === '3';

    this.worker.questions[7].answers[0] =
      this.eighthQuestion.value.phone === '1';
    this.worker.questions[7].answers[1] =
      this.eighthQuestion.value.phone === '2';
    this.worker.questions[7].answers[2] =
      !!this.eighthQuestion.value.phoneExtraFirst || false;
    this.worker.questions[7].answers[3] =
      !!this.eighthQuestion.value.phoneExtraSecond || false;

    this.worker.questions[8].answers[0] =
      this.ninethQuestion.value.phoneTime === '1';
    this.worker.questions[8].answers[1] =
      this.ninethQuestion.value.phoneTime === '2';
    this.worker.questions[8].answers[2] =
      this.ninethQuestion.value.phoneTime === '3';

    this.worker.questions[9].answers[0] =
      this.tenthQuestion.value.mouse === '1';
    this.worker.questions[9].answers[1] =
      this.tenthQuestion.value.mouse === '2';
    this.worker.questions[9].answers[2] =
      !!this.tenthQuestion.value.mouseExtraFirst || false;
    this.worker.questions[9].answers[3] =
      !!this.tenthQuestion.value.mouseExtraSecond || false;
    this.worker.questions[9].answers[4] =
      !!this.tenthQuestion.value.mouseExtraThird || false;

    this.worker.questions[10].answers[0] =
      this.eleventhQuestion.value.mouseTime === '1';
    this.worker.questions[10].answers[1] =
      this.eleventhQuestion.value.mouseTime === '2';
    this.worker.questions[10].answers[2] =
      this.eleventhQuestion.value.mouseTime === '3';

    this.worker.questions[11].answers[0] =
      this.twelvethQuestion.value.keyboard === '1';
    this.worker.questions[11].answers[1] =
      this.twelvethQuestion.value.keyboard === '2';
    this.worker.questions[11].answers[2] =
      !!this.twelvethQuestion.value.keyboardExtraFirst || false;
    this.worker.questions[11].answers[3] =
      !!this.twelvethQuestion.value.keyboardExtraSecond || false;
    this.worker.questions[11].answers[4] =
      !!this.twelvethQuestion.value.keyboardExtraThird || false;
    this.worker.questions[11].answers[5] =
      !!this.twelvethQuestion.value.keyboardExtraFourth || false;

    this.worker.questions[12].answers[0] =
      this.thirteenthQuestion.value.keyboardTime === '1';
    this.worker.questions[12].answers[1] =
      this.thirteenthQuestion.value.keyboardTime === '2';
    this.worker.questions[12].answers[2] =
      this.thirteenthQuestion.value.keyboardTime === '3';
  }

  doTheMath(): void {
    //question 1
    if (this.worker.questions[0].answers[0]) this.worker.questions[0].score = 1;
    if (this.worker.questions[0].answers[1]) this.worker.questions[0].score = 2;
    if (this.worker.questions[0].answers[2]) this.worker.questions[0].score = 2;
    if (this.worker.questions[0].answers[3]) this.worker.questions[0].score = 3;
    if (this.worker.questions[0].answers[4]) this.worker.questions[0].score++;
    if (this.worker.questions[0].answers[5]) this.worker.questions[0].score++;
    //question 2
    if (this.worker.questions[1].answers[0]) this.worker.questions[1].score = 1;
    if (this.worker.questions[1].answers[1]) this.worker.questions[1].score = 2;
    if (this.worker.questions[1].answers[2]) this.worker.questions[1].score = 2;
    if (this.worker.questions[1].answers[3]) this.worker.questions[1].score++;
    //question 3
    if (this.worker.questions[2].answers[0]) this.worker.questions[2].score = 1;
    if (this.worker.questions[2].answers[1])
      this.worker.questions[2].score = -1;
    if (this.worker.questions[2].answers[2]) this.worker.questions[2].score = 0;
    //question 4
    if (this.worker.questions[3].answers[0]) this.worker.questions[3].score = 1;
    if (this.worker.questions[3].answers[1]) this.worker.questions[3].score = 2;
    if (this.worker.questions[3].answers[2]) this.worker.questions[3].score = 2;
    if (this.worker.questions[3].answers[3]) this.worker.questions[3].score++;
    if (this.worker.questions[3].answers[4]) this.worker.questions[3].score++;
    if (this.worker.questions[3].answers[5]) this.worker.questions[3].score++;
    //question 5
    if (this.worker.questions[4].answers[0]) this.worker.questions[4].score = 1;
    if (this.worker.questions[4].answers[1]) this.worker.questions[4].score = 2;
    if (this.worker.questions[4].answers[2]) this.worker.questions[4].score = 2;
    if (this.worker.questions[4].answers[3]) this.worker.questions[4].score = 2;
    if (this.worker.questions[4].answers[4]) this.worker.questions[4].score++;
    //question 6
    if (this.worker.questions[5].answers[0]) this.worker.questions[5].score = 1;
    if (this.worker.questions[5].answers[1]) this.worker.questions[5].score = 2;
    if (this.worker.questions[5].answers[2]) this.worker.questions[5].score = 3;
    if (this.worker.questions[5].answers[3]) this.worker.questions[5].score++;
    if (this.worker.questions[5].answers[4]) this.worker.questions[5].score++;
    if (this.worker.questions[5].answers[5]) this.worker.questions[5].score++;
    if (this.worker.questions[5].answers[6]) this.worker.questions[5].score++;
    //question 7
    if (this.worker.questions[6].answers[0]) this.worker.questions[6].score = 1;
    if (this.worker.questions[6].answers[1])
      this.worker.questions[6].score = -1;
    if (this.worker.questions[6].answers[2]) this.worker.questions[6].score = 0;
    //question 8
    if (this.worker.questions[7].answers[0]) this.worker.questions[7].score = 1;
    if (this.worker.questions[7].answers[1]) this.worker.questions[7].score = 2;
    if (this.worker.questions[7].answers[2])
      this.worker.questions[7].score = this.worker.questions[7].score + 2;
    if (this.worker.questions[7].answers[3]) this.worker.questions[7].score++;
    //question 9
    if (this.worker.questions[8].answers[0]) this.worker.questions[8].score = 1;
    if (this.worker.questions[8].answers[1]) this.worker.questions[8].score = -1;
    if (this.worker.questions[8].answers[2]) this.worker.questions[8].score = 0;
    //question 10
    if (this.worker.questions[9].answers[0]) this.worker.questions[9].score = 1;
    if (this.worker.questions[9].answers[1]) this.worker.questions[9].score = 2;
    if (this.worker.questions[9].answers[2]) this.worker.questions[9].score++;
    if (this.worker.questions[9].answers[3]) this.worker.questions[9].score++;
    if (this.worker.questions[9].answers[4]) this.worker.questions[9].score++;
    //question 11
    if (this.worker.questions[10].answers[0]) this.worker.questions[10].score = 1;
    if (this.worker.questions[10].answers[1]) this.worker.questions[10].score = -1;
    if (this.worker.questions[10].answers[2]) this.worker.questions[10].score = 0;
    //question 12
    if (this.worker.questions[11].answers[0]) this.worker.questions[11].score = 1;
    if (this.worker.questions[11].answers[1]) this.worker.questions[11].score = 2;
    if (this.worker.questions[11].answers[2]) this.worker.questions[11].score++;
    if (this.worker.questions[11].answers[3]) this.worker.questions[11].score++;
    if (this.worker.questions[11].answers[4]) this.worker.questions[11].score++;
    if (this.worker.questions[11].answers[5]) this.worker.questions[11].score++;
     //question 13
     if (this.worker.questions[12].answers[0]) this.worker.questions[12].score = 1;
     if (this.worker.questions[12].answers[1]) this.worker.questions[12].score = -1;
     if (this.worker.questions[12].answers[2]) this.worker.questions[12].score = 0;
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
}
