import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  errorMessage = '';
  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Brak adresu email';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Adres email ma niepoprawną formę';
    } else {
      this.errorMessage = '';
    }
  }



}
