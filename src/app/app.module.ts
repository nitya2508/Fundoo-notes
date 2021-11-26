import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayCardComponent } from './Components/display-card/display-card.component';
import { GetallNotesComponent } from './Components/getall-notes/getall-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { RemindersComponent } from './Components/reminders/reminders.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { AuthguardService } from './services/authguardService/authguard.service';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { UpdateNotesComponent } from './Components/update-notes/update-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetemailComponent,
    ForgetpasswordComponent,
    DashBoardComponent,
    CreateNotesComponent,
    DisplayCardComponent,
    GetallNotesComponent,
    IconsComponent,
    RemindersComponent,
    TrashNotesComponent,
    UpdateNotesComponent,
    ArchiveNotesComponent
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
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [ 
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
