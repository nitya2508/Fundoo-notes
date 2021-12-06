import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
// import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data service/data.service';

@Component({
  selector: 'app-getall-notes',
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.scss']
})
export class GetallNotesComponent implements OnInit {
notesArray:any;
noteData:any;

message:any;
public subscription: any;

  constructor( private noteService: NoteService , private dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => {
      this.message = message;
      this.getAllNotes();
    })
    this.getAllNotes()
  }

  getAllNotes(){
    this.noteService.getAllNoteService().subscribe((request:any) => {
      // console.log("request data", request.data.data);
      this.notesArray=request.data.data
      // console.log("notesArray", this.notesArray);
      this.notesArray.reverse()
      this.notesArray = this.notesArray.filter((notedata: any) => {
        return notedata.isDeleted === false && notedata.isArchived == false;
      })

      
    },(error) => {
      console.log(error);
      
    })
  }

  receiveMessage($event:any) {
    console.log($event);
    this.getAllNotes()
    // this.message = $event
  }

  receivemessageDisplaytoGetAllnotes($event:any){
    // console.log("event from display to getAllNotes",$event);
    // console.log("auto refresh done");
    
    this.getAllNotes()
  }

}
