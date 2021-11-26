import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  msg:any;
  @Input() NotesList:any;
  @Output() messageDisplaytoGetAllnotes= new EventEmitter<string>();

  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;

  ngOnInit(): void {
  }

  openDialog(note:any){
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '40%',
      height: 'auto',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.messageDisplaytoGetAllnotes.emit(result)
      
    });

  }

  receivemessageTrashtoDisplay($event:any){
    console.log("event from icon to display",$event)
    this.msg= $event;
    console.log("msg",this.msg);
    
    this.messageDisplaytoGetAllnotes.emit(this.msg)
  }


}
