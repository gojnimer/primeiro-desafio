import { AppModule } from './../app.module';
import { CadastroService } from './cadastro.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CadastroComponent, FormCadastroComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
      
   
   
  ],
  exports:[CadastroComponent],
  providers:[CadastroService]
})
export class CadastroModule { }
