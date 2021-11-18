import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

//import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService,private snackbar: MatSnackBar ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.nullValidator],
      service: "advance"
    }, {
      // validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
     console.log("registration ======",this.registerForm.value);

    if(this.registerForm.valid){
      let reqData = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service: this.registerForm.value.service,
      }
      this.user.registration(reqData).subscribe((response: any) =>{
        console.log(response);

        this.snackbar.open('Registration Successful !','',{
          duration: 2000,
        });          
      }, error =>{
          console.log(error);
          
      })
    }else{
      this.snackbar.open('Please fill the aboce form to register','',{
        duration: 2000,
      });
    }
    // //stop here if form is invalid
    // if (this.registerForm.valid) {
    //   // console.log("inside register form");
      
    //    let payload = {
    //     firstName: this.registerForm.value.firstName,
    //     lastName: this.registerForm.value.lastName,
    //     email: this.registerForm.value.email,
    //     password: this.registerForm.value.password,
    //     service: this.registerForm.value.service
    //    }
    //   //  console.log("payload", payload);
    //   this.user.registration(payload).subscribe((response: any) => {
    //     console.log( response);
        
    //   });
       
    // }
    // if (this.registerForm.invalid) {
    //   console.log("inside invalid register form");
    //   return;
    // }

   // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

}
