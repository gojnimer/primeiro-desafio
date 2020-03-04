import { LoginService } from './login.service';
import { take } from 'rxjs/operators';
import { Component, OnInit, Directive, Output, HostListener,EventEmitter } from '@angular/core';

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
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }


 onSubmit(t){
   if(t){
    this.service.Logar(this.user).subscribe(teste => console.log(teste));
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


