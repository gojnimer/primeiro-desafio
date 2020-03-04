import { MatCardModule } from '@angular/material/card';
import { Result } from './result';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterLoginComponent } from './after-login.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [AfterLoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports:[AfterLoginComponent]
})
export class AfterLoginModule { }
