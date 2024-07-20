import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Sekcja A - krzesło
  private sectionA = [
    [2, 2, 3, 4, 5, 6, 7, 8],
    [2, 2, 3, 4, 5, 6, 7, 8],
    [3, 3, 3, 4, 5, 6, 7, 8],
    [4, 4, 4, 4, 5, 6, 7, 8],
    [5, 5, 5, 5, 6, 7, 8, 8],
    [6, 6, 6, 7, 7, 8, 8, 8],
    [7, 7, 7, 8, 8, 9, 9, 9],
  ];

  // Sekcja B - monitor i telefon
  private sectionB = [
    [1, 1, 1, 2, 3, 4, 5, 6],
    [1, 1, 2, 2, 3, 4, 5, 6],
    [1, 2, 2, 3, 3, 4, 6, 7],
    [2, 2, 3, 3, 4, 5, 6, 8],
    [3, 3, 4, 4, 5, 6, 7, 8],
    [4, 4, 5, 5, 6, 7, 8, 9],
    [5, 5, 6, 7, 8, 8, 9, 9],
  ];

  // Sekcja C - klawiatura i mysz
  private sectionC = [
    [1, 1, 1, 2, 3, 4, 5, 6],
    [1, 1, 2, 2, 3, 4, 5, 6],
    [1, 2, 2, 3, 3, 4, 6, 7],
    [2, 2, 3, 3, 4, 5, 6, 8],
    [3, 3, 4, 4, 5, 6, 7, 8],
    [4, 4, 5, 5, 6, 7, 8, 9],
    [5, 5, 6, 7, 8, 8, 9, 9],
    [6, 7, 7, 8, 8, 9, 9, 9],
  ];

  // Sekcja D - monitor i wyposażenie dodatkowe
  private sectionD = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 2, 3, 4, 5, 6, 7, 8, 9],
    [3, 3, 3, 4, 5, 6, 7, 8, 9],
    [4, 4, 4, 4, 5, 6, 7, 8, 9],
    [5, 5, 5, 5, 5, 6, 7, 8, 9],
    [6, 6, 6, 6, 6, 6, 7, 8, 9],
    [7, 7, 7, 7, 7, 7, 7, 8, 9],
    [8, 8, 8, 8, 8, 8, 8, 8, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ];

  // ROSA - wynik końcowy
  private rosa = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [3, 3, 3, 4, 5, 6, 7, 8, 9, 10],
    [4, 4, 4, 4, 5, 6, 7, 8, 9, 10],
    [5, 5, 5, 5, 5, 6, 7, 8, 9, 10],
    [6, 6, 6, 6, 6, 6, 7, 8, 9, 10],
    [7, 7, 7, 7, 7, 7, 7, 8, 9, 10],
    [8, 8, 8, 8, 8, 8, 8, 8, 9, 10],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  ];

  getSectionA(): number[][] {
    return this.sectionA;
  }

  getSectionB(): number[][] {
    return this.sectionB;
  }

  getSectionC(): number[][] {
    return this.sectionC;
  }

  getSectionD(): number[][] {
    return this.sectionD;
  }

  getRosa(): number[][] {
    return this.rosa;
  }
  getScoreSectionA(seatHeightPlusSeatdeapth: number, armrestsPlusChairBackrest: number){
    const i = seatHeightPlusSeatdeapth - 2;
    const j = armrestsPlusChairBackrest - 2;
    return this.sectionA[i][j];
  }
  getScoreSectionB(phonePlusPhoneTime: number, screenPlusScreenTime: number){
    const i = phonePlusPhoneTime;
    const j = screenPlusScreenTime;
    return this.sectionB[i][j];
  }
  getScoreSectionC(keyboardPlusKeyboardTime: number, mousePlusMouseTime: number){
    const i = keyboardPlusKeyboardTime;
    const j = mousePlusMouseTime;
    return this.sectionC[i][j];

  }
  getScoreSectionD(scoreSectionB: number, scoreSectionC: number){
   const i = scoreSectionB;
   const j = scoreSectionC;
   return this.sectionC[i][j];
  }
  getScoreRosa(scoreSectionAPlusTime: number, scoreSectionD: number){
   const i = scoreSectionAPlusTime - 1;
   const j = scoreSectionD - 1;
   return this.rosa[i][j];
  }

}
