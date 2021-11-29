import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
title:any;
description:any;
id:any;
color:any;

  constructor(
   
    private note: NoteService,
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title=data.title;
    this.description=data.description;
    this.id=data.id;
    this.color=data.color;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

  closeDialog(){
    let data = {
      title: this.title,
      description: this.description,
      noteId:this.id
    }
    this.note.updateService(data).subscribe((response:any) =>{
      console.log("update response",response);
      this.dialogRef.close(response);
      
    })
  }
  receivemessageTrashtoDisplay($event:any){
    console.log("event from display to getAllNotes",$event);
    console.log("inside updaes");
    this.color=$event;
    
  }
}
