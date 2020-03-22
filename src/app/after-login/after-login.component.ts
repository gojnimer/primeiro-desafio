import { PokemonService } from './pokemon.service';
import { Result } from './result';
import { Animes } from './animes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {
 
  listaPoke: Result[];
  listaAnime: Animes[];

  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    var t = this.service.returnPokes().subscribe(obj => this.listaPoke = obj.results);  
    var e = this.service.getAnimes().subscribe(animes => this.listaAnime = animes);  
    
  }

}
