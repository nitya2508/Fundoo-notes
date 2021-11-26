import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted=false;
  token: any;
  hide = true;
  conhide = true;

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute,
    private snackbar: MatSnackBar ) { }

  ngOnInit() {
    this.forgetpasswordForm= this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: "advance"
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
    
  }

  get f() { return this.forgetpasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.forgetpasswordForm.value);


    // stop here if form is invalid
    if (this.forgetpasswordForm.valid) {
       
      let payload= {
        newPassword : this.forgetpasswordForm.value.password,
        // confirmPassword: this.forgetpasswordForm.value.confirmPassword,
        // service: this.forgetpasswordForm.value.service,
      }

        this.user.forgetpassword(payload,this.token).subscribe((response: any)=>{
          console.log("password response", response);
          this.snackbar.open('Password re-set Successful !','',{
            duration: 2000,
          });
        },error => {
          this.snackbar.open('Please enter correct password','',{
            duration: 2000,
          });
        })
    }else{
      this.snackbar.open('Please enter the password','',{
        duration: 2000,
      });
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetpasswordForm.value, null, 4));
  }

}
