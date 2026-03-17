import { Component, computed, effect, inject, signal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces/pokemon-body.interface';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.css',
})
export default class PokemonPage  {

  private location = inject(Location);
  private title = inject(Title);

  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);

  public pokemon = signal<Pokemon | null>(null);
  public isLoading = signal(true);

  public image = computed(() => {
    return this.pokemon()?.sprites.other?.['official-artwork']?.front_default
      ?? 'assets/no-image.png';
  });

  // id reactivo desde la URL
  public pokemonId = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id')) || 1)
    ),
    { initialValue: 1 }
  );

  constructor() {

    // efecto reactivo (SSR-safe)
    effect(() => {
      const id = this.pokemonId();

      this.isLoading.set(true);

      this.pokemonService.loadPokemon(id)
        .subscribe({
          next: (pokemon) => {
            this.pokemon.set(pokemon);
            this.isLoading.set(false);
            this.title.setTitle(`Pokemon - ${pokemon.name}`);
          },
          error: () => this.isLoading.set(false)
        });
    });

  }

  goBack() {
    this.location.back();
  }
}
