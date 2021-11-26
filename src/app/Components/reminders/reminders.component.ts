import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  constructor( private noteService: NoteService ) { }

  ngOnInit(): void {
    this.getReminderNotes()
  }

  getReminderNotes(){
    this.noteService.getReminderNotesService().subscribe((res:any) => {
      console.log("inside reminders",res);
      
    })
  }

}
