import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl=environment.baseurl;

  constructor(private httpClient :HttpClient) { }

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={} ){
    // console.log("inside http service" ,reqdata,token,httpOptions)
   return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions)

  }
  getService(url:string='', tokenRequired:boolean = false, httpOptions:any={} ){
    // console.log("http service");
    
    return this.httpClient.get(this.baseUrl+url,tokenRequired && httpOptions)

  }
  putService(){

  }
  deleteService(){

  }
  patchService(){

  }
}
