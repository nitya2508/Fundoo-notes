import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted= false;
  hide = true;

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackbar:MatSnackBar,
    private router: Router ) { }

  ngOnInit() {

    //localStorage.setItem('SessionUser',this.user)

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: "advance"
    })
  }
  get f() { return this.loginForm.controls; }

  

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);


    // stop here if form is invalid
    if (this.loginForm.valid) {
      console.log("inside login");
      
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: this.loginForm.value.service,
      }
      this.user.login(payload).subscribe((response: any)=>{
        console.log("login  response",response)
        localStorage.setItem("token",response.id)
        this.router.navigateByUrl('/home/notes')
        
        this.snackbar.open('Sign in Successful !','',{
          duration: 2000,
        });
        
      },error=>{
        this.snackbar.open('Invalid email or password','',{
          duration: 2000,
        });
      })
    }else{
      this.snackbar.open('Please enter your email and password','',{
        duration: 2000,
      });
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

}
