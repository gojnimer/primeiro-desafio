import { HttpClient } from '@angular/common/http';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  result:string;

  pessoa:any = {
    login: "",
    name: "",
    email:"",
    password: "",
    confirma_password: "",
    idEmpresa: "13",
    Status:"Aprovado",
    role: "Client",
    regId: "",
    status: "Aprovado"


  }
  constructor(private service:CadastroService) { }

  ngOnInit(): void {
    
  } 

  onSubmit(form){
    
   this.service.create(this.pessoa).subscribe(
     success => console.error("sucesso"),
     error => console.error(error),
     () => console.log("request completo")
   );
  }

}
