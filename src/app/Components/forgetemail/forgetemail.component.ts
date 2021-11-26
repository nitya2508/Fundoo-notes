import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgetemail',
  templateUrl: './forgetemail.component.html',
  styleUrls: ['./forgetemail.component.scss']
})
export class ForgetemailComponent implements OnInit {
  forgetemailForm!: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.forgetemailForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      service: "advance"
    })
  }

  get f() { return this.forgetemailForm.controls; }

    onSubmit() {
        this.submitted = true;
        console.log(this.forgetemailForm.value);
        

        // stop here if form is invalid
        if (this.forgetemailForm.valid) {
          let payload = {
            email: this.forgetemailForm.value.email,
            service: this.forgetemailForm.value.service,
          }
          this.user.forgetemail(payload).subscribe((response: any) =>{
            console.log("email response", response);
            this.snackbar.open('Re-set link sent to your email !','',{
              duration: 2000,
            });
          },error => {
            this.snackbar.open('Invalid email','',{
              duration: 2000,
            });
          })
            
        }else {
          this.snackbar.open('Please enter your email','',{
            duration: 2000,
          });
        }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetemailForm.value, null, 4));
    }

}
