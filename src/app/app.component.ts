import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  canShow: boolean = false;
  constructor(private logged:LoginService){
    logged.navbar.subscribe(t => this.canShow = t);
  }


  ngOnInit(){
    let user = sessionStorage.getItem('usuario');
    if(user != null){
      this.logged.usuario = user;
      this.logged.navbar.emit(true);
    }
    
  }

}
