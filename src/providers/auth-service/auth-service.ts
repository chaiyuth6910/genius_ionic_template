import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

// Base URL API
let apiUrl = "http://localhost/rest_auth/index.php";

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials,type){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();

      this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
      .subscribe(res=>{
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
      
    });
  }

}
