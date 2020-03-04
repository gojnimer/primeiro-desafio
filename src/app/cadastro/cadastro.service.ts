import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  create(pessoa){
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVjNDYxMmM4ZGY3NWVkZmY0ZmJlNDlmZCJ9.gw8v8xd2XqhmBjG83hw2JTncXsLg9n3bzo9sob_I5w4'
   });
    return this.http.post("http://45.55.144.89/fsapi/users/auth/register-jwt",pessoa,{ headers: reqHeader }).pipe(take(1));
  }

  
}
