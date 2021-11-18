import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexModule } from '@angular/flex-layout/flex';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainbarComponent } from './Components/keepNotes/mainbar/mainbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetemailComponent,
    ForgetpasswordComponent,
    MainbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    FlexModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
