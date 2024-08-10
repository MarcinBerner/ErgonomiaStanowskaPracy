import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<User | null | undefined>(undefined);

  constructor() {
    if (this.isBrowser()) {
      this.loadUserFromLocalStorage();
      this.subscribeToFirebaseUser();
    }
  }
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private loadUserFromLocalStorage(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUserSig.set(JSON.parse(storedUser));
    } else {
      this.currentUserSig.set(null);
    }
  }
  private subscribeToFirebaseUser(): void {
    this.user$.subscribe((firebaseUser) => {
      if (firebaseUser) {
        const userData: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          username: null, // Ustaw null lub zaktualizuj to, jeśli masz dodatkowe źródło danych
        };
        this.setUser(userData);
      } else {
        this.clearUser();
      }
    });
  }
  private setUser(user: User): void {
    this.currentUserSig.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
  private clearUser(): void {
    this.currentUserSig.set(null);
    localStorage.removeItem('user');
  }
  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});
    return from(promise);
  }
  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
  isLoggedIn(): boolean {
    return this.currentUserSig() !== null;
  }
}
