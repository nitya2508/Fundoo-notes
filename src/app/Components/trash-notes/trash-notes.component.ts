import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notesArray:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getTrashNotes()
  }

  getTrashNotes(){
    this.note.getTrashNoteService().subscribe((res:any) => {
      console.log("trash list",res.data.data);
      this.notesArray=res.data.data
      // console.log("notesArray", this.notesArray);
      // this.notesArray.reverse()
      
    })
  }

  receivemessageDisplaytoGetAllnotes($event:any){
    console.log("event from display to getAllNotes",$event);
    console.log("auto refresh done");
    
    this.getTrashNotes()
  }

}
