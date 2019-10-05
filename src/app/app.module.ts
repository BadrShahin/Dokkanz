// Modules imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components imports
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// Services imports
import { AuthService } from './services/auth.service';


// Firebase imports 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

// Angular Material imports 
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyCMX7H-6u0MXZOAdimSc77UNo6gu8AWceo",
  authDomain: "dokkanz-9b743.firebaseapp.com",
  databaseURL: "https://dokkanz-9b743.firebaseio.com",
  projectId: "dokkanz-9b743",
  storageBucket: "",
  messagingSenderId: "689252389436",
  // appId: "1:689252389436:web:fc1692207923aba53aa939",
  // measurementId: "G-Q1LXYE5TTZ"
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule,
    FormsModule,
    ReactiveFormsModule,
    // Initialize Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [
    // AuthService,
    // AngularFireDatabase,
    // AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
