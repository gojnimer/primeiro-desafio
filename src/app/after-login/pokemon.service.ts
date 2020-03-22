import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Animes } from './animes';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  returnPokes(){
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon");
  }



  getAnimes (): Observable<Animes[]> {
    return this.http.get<Animes[]>("https://localhost:44346/Anime/ListarAnimes");
  }

}
