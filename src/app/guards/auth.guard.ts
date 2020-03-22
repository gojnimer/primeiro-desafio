import { LoginService } from './../login/login.service';
import { Observable } from 'rxjs';
import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate{

  constructor(private login:LoginService, private router: Router) { }
  



  canActivate(router: ActivatedRouteSnapshot,state:RouterStateSnapshot  ) : Observable<boolean> | boolean{
    let store = sessionStorage.getItem('usuario');
     if(store != null){
        this.login.usuario = JSON.parse(store);
     }
     if(this.login.usuarioAuth() != null){
      return true;
     }
     this.router.navigate(['/login']);
     return false;
     
  }
}
