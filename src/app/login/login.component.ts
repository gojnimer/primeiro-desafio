import { LoginService } from './login.service';
import { take } from 'rxjs/operators';
import { Component, OnInit, Directive, Output, HostListener,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  capsOn:boolean;
  passFocus:boolean = false;
  
  user:any = {
    email: "",
    password:"" 
  }

  erroAPI:boolean = false;
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.service.usuario = null;
    this.service.navbar.emit(false);
  }


 onSubmit(t){
   this.erroAPI = false;
   if(t){
    this.service.Logar(this.user).subscribe(  
      Success => {
        this.service.usuario = JSON.parse(Success);
        sessionStorage.setItem('usuario', Success);
        this.service.navbar.emit(true);
        this.router.navigate(["/"]);

      },
      Failure => {this.service.navbar.emit(false); this.erroAPI = true;}
      
      );
   }  
 
 }



  inputFocused(){
    this.passFocus = true;
  }

  inputUnfocused(){
    this.passFocus = false;
    this.capsOn = false;
  }



  @HostListener('window:click', ['$event']) onClick(event){
    if(this.passFocus == false){
      return;
    }
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capsOn = true;
     } else {
      this.capsOn = false;
     }
    }
   

    
   @HostListener('window:keydown', ['$event'])
   onKeyDown(event){
    if(this.passFocus == false){
      return;
    }
   if (event.getModifierState && event.getModifierState('CapsLock')) {
     this.capsOn = true;
     } else {
      this.capsOn = false;
     }
   }
   
   @HostListener('window:keyup', ['$event'])
    onKeyUp(event){
      if(this.passFocus == false){
        return;
      }
    if (event.getModifierState && event.getModifierState('CapsLock')) {
     this.capsOn = true;
    } else {
     this.capsOn = false;
    }
   }

}


