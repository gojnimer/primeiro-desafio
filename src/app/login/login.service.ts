import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService{

  usuario: any;
  navbar = new EventEmitter<boolean>();
 
  constructor(private http:HttpClient) { }

  Logar(user){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json'
   });
    return this.http.post("http://52.91.139.190/fsapi/users/login",{ 'email': user.email, 'password': user.password },{ headers: reqHeader,responseType: 'text'  })
    .pipe(take(1));
  }

  usuarioAuth(){
    return this.usuario == null ? null : this.usuario['token'];
  }


  

}
