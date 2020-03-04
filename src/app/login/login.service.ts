import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  Logar(user){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json'
   });
    return this.http.post("http://45.55.144.89/fsapi/users/login",{ 'email': user.email, 'password': user.password },{ headers: reqHeader,responseType: 'text'  })
    .pipe(take(1));
  }


  

}
