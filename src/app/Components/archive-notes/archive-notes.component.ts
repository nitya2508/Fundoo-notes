import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  notesArray:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getArchiveNotes()
  }

getArchiveNotes(){
  this.note.getArchiveNoteService().subscribe((request:any) =>{
    console.log("Archived list",request.data.data);
    this.notesArray=request.data.data,
    // console.log("notesArray", this.notesArray);
    // this.notesArray.reverse()
    this.notesArray = this.notesArray.filter((notedata: any) => {
      return notedata.isDeleted === false;
    })
    
  })

}

receivemessageDisplaytoGetAllnotes($event:any){
  console.log("event from display to getAllNotes",$event);
  console.log("auto refresh done");
  
  this.getArchiveNotes()
}

}

