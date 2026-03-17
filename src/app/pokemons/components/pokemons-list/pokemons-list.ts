import { Component, input } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";
import { SimplePokemon } from '../../interfaces/pokemon.interface';


@Component({
  selector: 'app-pokemons-list',
  imports: [PokemonCard],
  templateUrl: './pokemons-list.html',
  styleUrl: './pokemons-list.css',
})
export class PokemonsList {

  public pokemons = input.required<SimplePokemon[]>();

}
