import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createNotesForm!: FormGroup;
  display = true;
  input_title = '';
  input_description = '';
  constructor(private formBuilder: FormBuilder, private note: NoteService) { }
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.createNotesForm = this.formBuilder.group({
      title: [''],
      description: [''],
      service: "advance"
    });
  }
  takeNote() {
    console.log("take event============");
    this.display = false;
    console.log(this.createNotesForm.value.title, this.createNotesForm.value.description);
    
    this.createNotesForm.reset();
    console.log("after",this.createNotesForm.value.title, this.createNotesForm.value.description);
  }
  onSubmit() {
    this.display = true;


    if (this.createNotesForm.valid) {
      let data = {
        title: this.createNotesForm.value.title,
        description: this.createNotesForm.value.description,
      }
      console.log("data sent", data);

      this.note.createnoteservice(data).subscribe((res: any) => {
        console.log(res);
        this.messageEvent.emit(res)
        console.log("messageEvent", this.messageEvent);

        

      }, error => {
        console.log("error");
      })

    } else {
      console.log("not received");
    }
  }

}
