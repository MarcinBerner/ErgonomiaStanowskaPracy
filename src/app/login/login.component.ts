import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, merge } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  errorMessage = '';
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

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
  onSubmit(): void{
    const rawForm = this.form.getRawValue();
    this.authService
    .login(rawForm.email, rawForm.password)
    .subscribe({
      next: () =>{
        this.router.navigateByUrl('/');
      },
      error: (err) =>{
        this.errorMessage = err.code;
      },
    });
  }


}
