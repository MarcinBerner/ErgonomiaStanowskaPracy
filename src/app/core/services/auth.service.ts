import { Injectable, inject, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<User | null | undefined>(undefined);
  constructor() { }
  login( email: string, password: string ): Observable<void>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(() => {});
    return from(promise);
  }
  logout(): Observable<void>{
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
}
