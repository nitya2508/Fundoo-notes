import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { MainbarComponent } from './Components/keepNotes/mainbar/mainbar.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetemail',component:ForgetemailComponent},
  {path:'resetpassword/:token',component:ForgetpasswordComponent},
  // {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'mainbar',component:MainbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
