import { Injectable } from '@angular/core';
import { BehaviorSubject, publishBehavior } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable()
  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  private searchData = new BehaviorSubject({ type:'',data:[]});
  searchNote = this.searchData.asObservable()
  changeData(message:any){
    this.searchData.next(message)
    // console.log("inside data service ===", message);
    
  }
}

