
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/userService/user.service';
import { NoteService } from 'src/app/services/noteService/note.service';
import { DataService } from 'src/app/services/data service/data.service';

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
  inputdata:any;
  collabData:any;
  collaborators:any;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private noteService: NoteService,
    public dialogRef: MatDialogRef<CollaboratorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.inputdata=data;
   
  }

  ngOnInit(): void {
    this.collaborators=this.inputdata.collaborators;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeInput(e:any){
    // console.log("collaborate", e.target.value);
    
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
    this.collabData=collab
    this.inputEmail=collab.email
    // console.log(this.inputEmail);
    // console.log("data======",this.inputdata);
    // console.log("data======id",this.inputdata.id);
    
  }

  onCancel(){
    this.dialogRef.close();
  }

  AddCollab(){
    this.dialogRef.close();
    let collaboratorData = {
      firstName: this.collabData.firstName,
      lastName: this.collabData.lastName,
      email: this.collabData.email,
      userId: this.collabData.userId
    }
    this.noteService.AddCollaborators(collaboratorData,this.inputdata.id).subscribe((result:any) => {
      console.log("add colab response",result)

      this.dataService.changeMessage(result)
      console.log("after data sharing",);
      
    })
    
  }


}