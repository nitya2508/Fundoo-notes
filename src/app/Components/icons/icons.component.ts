import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { DisplayCardComponent } from '../display-card/display-card.component';
import { TrashNotesComponent } from '../trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() messageTrashtoDisplay = new EventEmitter<string>();
  // @Output() messageArchivetoDisplay = new EventEmitter<string>();
  date:any;

  isDisplayNoteComponent: boolean = false;
  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;

 

  constructor(private note: NoteService,  private route: ActivatedRoute, private Router: Router,public dialog: MatDialog,
    private snackbar :MatSnackBar) { }

  ngOnInit(): void {

    let comp = this.route.snapshot.component;
    if (comp == DisplayCardComponent) {
      // this.isDisplayNoteComponent = true;
    }

    if (comp == TrashNotesComponent) {
      this.isTrashComponent = true;
      // console.log(this.isTrashComponent);
    }
    if (comp == ArchiveNotesComponent) {
      this.isArchiveComponent = true;
      // console.log(this.isArchiveComponent);
    }


  }

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  addReminder(){
    console.log(this.date);
    let data={
      noteIdList: [this.noteCard.id],
      reminder:this.date
    }
    this.note.AddReminder(data).subscribe((res:any)=>{
      // console.log("reminder data",res);
      this.messageTrashtoDisplay.emit(res)

      this.snackbar.open('Reminder added!','',{
        duration: 2000,
      });
    },error=>{
      console.log("error",error);
    })
  }

  trashNote() {
    // console.log(this.noteCard.id);

    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.note.trashNoteService(req).subscribe((res: any) => {
      // console.log("inside icon calling trash ", res.data);
      this.messageTrashtoDisplay.emit(res)

      this.snackbar.open('Note deleted !','',{
        duration: 2000,
      });
    },error=>{
      console.log("error",error);
      
    })

  }

  archiveNote() {

    // console.log(this.noteCard.id);

    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.note.archiveNoteService(req).subscribe((res: any) => {
      // console.log("inside icon calling archive", res.data);
      this.messageTrashtoDisplay.emit(res)
   
      this.snackbar.open('Note archived !','',{
        duration: 2000,
      });
    },error=>{
      console.log("error",error);
      
    })
  }
 
    unarchive(){

      // console.log(this.noteCard.id);

      let req = {
        noteIdList: [this.noteCard.id],
        isArchived: false,
      }
      this.note.archiveNoteService(req).subscribe((res:any) => {
        // console.log("inside icon calling archive" , res.data);
        this.messageTrashtoDisplay.emit(res)
     
        this.snackbar.open('Note unarchived !','',{
          duration: 2000,
        });
      },error=>{
        console.log("error",error);
        
      })
  }

  permanentDelete(){
    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.note.deleteNoteService(req).subscribe((res: any) => {
      // console.log("inside icon calling trash ", res.data);
      this.messageTrashtoDisplay.emit(res)
    
      this.snackbar.open('Note deleted forever !','',{
        duration: 2000,
      });
    },error=>{
      console.log("error",error);
      
    })

  }
  restore(){

    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.note.trashNoteService(req).subscribe((res: any) => {
      // console.log("inside icon calling trash ", res.data);
      this.messageTrashtoDisplay.emit(res)
    
      this.snackbar.open('Note restored !','',{
        duration: 2000,
      });
    },error=>{
      console.log("error",error);
      
    })
  }

  setColor(color: any) {
    console.log('color', color);
    console.log(this.noteCard);
    
    this.noteCard.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.noteCard.id],
    }
    console.log(data);
    this.note.changeColor(data).subscribe(
      (response: any) => {
        // this.color.emit()
        // console.log('Response of setColour', response);
        this.messageTrashtoDisplay.emit(color)
      },
      (error: any) => {
        console.log('archive Error at icons methods', error);

      }
    );
    // window.location.reload();
  }



 collaborate() {

  console.log("this is collaborate");
  const dialogRef = this.dialog.open(CollaboratorsComponent, {
   
    width: '35%',
    height: 'auto',
    panelClass: "updateDialog",
    // backdropClass: [this.color]="note.color",
    // backdropClass: note.color,
    data: this.noteCard,
  });

  dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed',result);
    // this.messageDisplaytoGetAllnotes.emit(result);
    
    // this.snackbar.open('Note updated Successfully !','',{
    //   duration: 2000,
    // });

    
  });
  


  
}

}
