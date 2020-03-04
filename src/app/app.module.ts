import { AfterLoginModule } from './after-login/after-login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    AfterLoginModule,
    LoginModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatGridListModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
