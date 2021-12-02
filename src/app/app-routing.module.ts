import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { GetallNotesComponent } from './Components/getall-notes/getall-notes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { IconsComponent } from './Components/icons/icons.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayCardComponent} from './Components/display-card/display-card.component';
import { RemindersComponent } from './Components/reminders/reminders.component';
import {TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';

import { AuthGuardGuard } from './Authguard/auth-guard.guard';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full' },
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent,},
  {path:'forgetemail',component:ForgetemailComponent},
  {path:'resetpassword/:token',component:ForgetpasswordComponent},
  // {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'home',component:DashBoardComponent,canActivate:[AuthGuardGuard],
  children:[
    {path:'', redirectTo:"/home/notes", pathMatch:'full' },
    {path:'notes', component:GetallNotesComponent},
    {path:'reminders',component:RemindersComponent},
    {path:'trash',component:TrashNotesComponent},
    {path:'archive',component:ArchiveNotesComponent}
  ]
},
{path:'icons',component:IconsComponent},
// {path:'display',component:DisplayCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
