import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  constructor(public dialog: MatDialog,private snackbar:MatSnackBar) {}
  msg:any;
  @Input() NotesList:any;
  @Output() messageDisplaytoGetAllnotes= new EventEmitter<string>();
  color:any
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;

  ngOnInit(): void {
  }

  openDialog(note:any){
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
     
      width: '50%',
      height: 'auto',
      backdropClass: [this.color]="note.color",
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
