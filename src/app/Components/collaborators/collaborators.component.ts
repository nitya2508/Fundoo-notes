
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/userService/user.service';
import { NoteService } from 'src/app/services/noteService/note.service';
import { DataService } from 'src/app/services/data service/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');

  values:any;
  collaboratorsArray:any;
  inputEmail:any;
  notedata:any;
  collabData:any;
  collaborators:any;

  isAdded: boolean=false;
  isEmailInput: boolean=false;

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private dataService: DataService,
    private userService: UserService,
    private noteService: NoteService,
    public dialogRef: MatDialogRef<CollaboratorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.notedata=data;
   
  }

  ngOnInit(): void {
    this.collaborators=this.notedata.collaborators;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeInput(e:any){
    // console.log("collaborate", e.target.value);
    this.isEmailInput=true;
    let data = {
      "searchWord": e.target.value
      }
      this.userService.searchList(data).subscribe((response:any) =>{
        // console.log("Inside search list",response.data.details);
        this.collaboratorsArray=response.data.details
      })
  }

  chooseCollab(collab:any){
    // console.log("selected email in collab list", collab);
    this.isAdded=true;
    this.collabData=collab;
    this.inputEmail=collab.email;
    
    // console.log(this.inputEmail);
    // console.log("data======",this.inputdata);
    // console.log("data======id",this.inputdata.id);
    
  }
  clickOnTick(){
    this.isAdded=false;
    this.inputEmail="";
    let collaboratorData = {
      firstName: this.collabData.firstName,
      lastName: this.collabData.lastName,
      email: this.collabData.email,
      userId: this.collabData.userId
    }
    this.collaborators.push(collaboratorData)
    this.noteService.AddCollaborators(collaboratorData,this.notedata.id).subscribe((result:any) => {
      // console.log("add colab response",result)
      
      this.dataService.changeMessage(result)
      // console.log("after data sharing",);
      
      this.snackbar.open('Collaborator added Successfully !','',{
        duration: 2000,
      });
    },err=>{
      console.log("error");
      
    })
  }

  onCancel(){
    this.dialogRef.close();
  }
  

  AddCollab(){
    console.log("isAdded ===",this.isAdded);
    this.inputEmail="";
    // this.dialogRef.close();
   if(this.isAdded == true){
    this.dialogRef.close();

    let collaboratorData = {
      firstName: this.collabData.firstName,
      lastName: this.collabData.lastName,
      email: this.collabData.email,
      userId: this.collabData.userId
    }
    this.noteService.AddCollaborators(collaboratorData,this.notedata.id).subscribe((result:any) => {
      // console.log("add colab response",result)
      
      this.dataService.changeMessage(result)
      // console.log("after data sharing",);

      this.snackbar.open('Collaborator added Successfully !','',{
        duration: 2000,
      });
  
    },err=>{
      console.log("error");
      
    })
  }else{
    this.dialogRef.close();
  }
  }

  deletecollaborator(collborate:any){
    console.log("note id=====",this.notedata.id);
    console.log("user id=====",collborate.userId);
    
    this.collaborators.push()
    this.noteService.removeCollab(this.notedata.id, collborate.userId).subscribe((res:any) =>{
      console.log("remove collab===",res);
      this.dataService.changeMessage(res)

      for (let i = 0; i < this.collaborators.length; i++) {
        if (this.collaborators[i] == collborate) {
        this.collaborators.splice(i, 1);
        }
        }

        this.snackbar.open('Collaborator deleted Successfully !','',{
          duration: 2000,
        });
    },error=>{
      console.log("error",error);
      
    })

  }
}