import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl=environment.baseurl;

  constructor(private httpClient :HttpClient) { }

  postService(url: string, reqdata: any, token: boolean= false, header: any=null ){
    
   return this.httpClient.post(this.baseUrl+url,reqdata,token && header)

  }
  getService(){

  }
  putService(){

  }
  deleteService(){

  }
  patchService(){

  }
}
