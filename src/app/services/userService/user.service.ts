import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpService : HttpService) {
    this.token= localStorage.getItem("token")
   }

  registration(reqdata: any){
    console.log(reqdata);
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'token'
      })
    }

   return this.httpService.postService('/user/userSignUp',reqdata,false,header)
  }

  login(payload: any)
   {
    //  console.log("user login ======");
     
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
   return this.httpService.postService("/user/login", payload, false, header)
}
forgetemail(payload:any)
{
  // console.log("user email ======");
     
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
   return this.httpService.postService("/user/reset", payload, false, header)
}
encode(data: any) {
  const formBody = [];
  for (const property in data) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}

forgetpassword(payload:any,token:any)
{
  console.log("user password ======token" ,token);
     
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
       'Authorization':token
      })
   }
   return this.httpService.postService("/user/reset-password", this.encode(payload), true, header)
}

searchList(data:any){
  // console.log("user list======token" ,this.token);

  let header = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token
      
    })
  }
  return this.httpService.postService("/user/searchUserList", data, true, header)
}
  

}
