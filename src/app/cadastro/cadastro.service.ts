import { LoginService } from './../login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient,private user: LoginService) { }


  create(pessoa){
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.usuarioAuth()
   });
    return this.http.post("http://52.91.139.190/fsapi/users/auth/register-jwt", pessoa, { headers: reqHeader,responseType: 'text'  }).pipe(take(1));
  }

  
}
