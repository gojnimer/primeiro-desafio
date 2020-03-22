import { AuthGuard } from './guards/auth.guard';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AfterLoginModule } from './after-login/after-login.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'cadastro', component:CadastroComponent, canActivate: [AuthGuard] },
  {path:'pokemon',component:AfterLoginComponent, canActivate: [AuthGuard]},
  {path:'home' , component:AfterLoginComponent , canActivate: [AuthGuard]},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
