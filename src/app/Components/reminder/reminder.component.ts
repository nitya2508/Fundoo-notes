import { Component,Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  notesArray:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getReminderNotes()
  }

  getReminderNotes(){
    this.note.getReminderService().subscribe((res:any) => {
      console.log("trash list",res.data.data);
      this.notesArray=res.data.data
      // console.log("notesArray", this.notesArray);
      // this.notesArray.reverse()
      
    })
  }

  receivemessageDisplaytoGetAllnotes($event:any){
    console.log("event from display to getAllNotes",$event);
    console.log("auto refresh done");
    
    this.getReminderNotes()
  }

}

