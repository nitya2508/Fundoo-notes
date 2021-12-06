import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data service/data.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  constructor(public dialog: MatDialog,private snackbar:MatSnackBar, private dataService :DataService) {}
  msg:any;
  @Input() NotesList:any;
  @Output() messageDisplaytoGetAllnotes= new EventEmitter<string>();
  color:any
  subscription: any;
  message:any;
  searchWord:any;
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;

  ngOnInit() {

    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord=message.data[0]
      // this.getAllNotes();
    })
  }

  openDialog(note:any){
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
     
      width: '40%',
      height: 'auto',
      panelClass: "updateDialog",
      // backdropClass: [this.color]="note.color",
      // backdropClass: note.color,
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.messageDisplaytoGetAllnotes.emit(result);
      
      this.snackbar.open('Note updated Successfully !','',{
        duration: 2000,
      });

      
    });

  }

  receivemessageTrashtoDisplay($event:any){
    console.log("event from icon to display",$event)
    this.msg= $event;
    console.log("msg",this.msg);
    
    this.messageDisplaytoGetAllnotes.emit(this.msg)
  }


}
