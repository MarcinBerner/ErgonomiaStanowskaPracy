import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ergonomia-stanowiska-pracy","appId":"1:634029187584:web:0e94aabe1c980da1996ee5","databaseURL":"https://ergonomia-stanowiska-pracy-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"ergonomia-stanowiska-pracy.appspot.com","apiKey":"AIzaSyAjBR8LoQO1rJ6NfHdgkUE499oSUt446OU","authDomain":"ergonomia-stanowiska-pracy.firebaseapp.com","messagingSenderId":"634029187584"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
