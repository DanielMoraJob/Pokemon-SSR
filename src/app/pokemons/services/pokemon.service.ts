import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokeAPIResponse, SimplePokemon } from '../interfaces/pokemon.interface';
import { delay, map, tap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon-body.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private httpClient = inject(HttpClient);

  public loadPage(page: number) {
    if(page < 0) page = 0;

    return this.httpClient.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
    .pipe(
      map((response) => {
        const simplePokemon: SimplePokemon[]
          = response.results.map((pokemon) => {
            const id = +pokemon.url.split('/').slice(-2, -1)[0];
            return {
              id,
              name: pokemon.name,
            };
          });
        return simplePokemon;
      })
    );
  }

  public loadPokemon(id: number) {
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }


}
