import { Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/pokemon.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {

  public pokemon = input.required<SimplePokemon>();

  public readonly pokemonImage = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon().id}.svg`;
  });

/*   constructor() {
    effect(() => {
      console.log(this.pokemon());
    });
  } */



}
