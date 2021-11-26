import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor( private httpService:HttpService ) {
    this.token= localStorage.getItem('token')
   }
  

   createnoteservice(reqPayload: any) {

    console.log("inside note service",reqPayload);
    
    let headers = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.token
    })
    
    }
    return this.httpService.postService('/notes/addNotes', reqPayload, true, headers)
    }

  getAllNoteService(){
    
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      return this.httpService.getService('/notes/getNotesList', true, httpOptions)
  }

    getReminderNotesService(){
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.getService('/notes/getReminderNotesList', true, httpOptions)
    }

    trashNoteService(data:any){
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.postService('/notes/trashNotes', data, true, httpOptions)
    }

    getTrashNoteService(){
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.getService('/notes/getTrashNotesList',  true, httpOptions)
    }

    archiveNoteService(data:any){
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.postService('/notes/archiveNotes', data, true, httpOptions)
    }

    getArchiveNoteService(){
      // console.log("note service");
      
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.getService('/notes/getArchiveNotesList',  true, httpOptions)
    }
    updateService(data :any){
      console.log("note service");

      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.postService('/notes/updateNotes',data,  true, httpOptions)

    }

    changeColor(data: any) {
      let httpAuthOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.postService('/notes/changesColorNotes', data, true, httpAuthOptions);
    }

    deleteNoteService(data:any){
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
        
        }
        return this.httpService.postService('/notes/deleteForeverNotes', data, true, httpOptions)
    }
}
