import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PokemonsList } from '../../pokemons/components/pokemons-list/pokemons-list';
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { SimplePokemon } from '../../pokemons/interfaces/pokemon.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonsList, PokemonListSkeleton],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
})
export class PokemonsPage {

  private title = inject(Title);

  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public isLoading = signal(true);
  public pokemons = signal<SimplePokemon[]>([]);

  public currentPage = toSignal(
    this.route.queryParams.pipe(
      map(params => Number(params['page']) || 1),
      map(page => page < 1 ? 1 : page)
    ),
    { initialValue: 1 }
  );

  constructor() {
    // reacciona al cambio de página (SSR-safe)
    effect(() => {
      const page = this.currentPage();

      this.isLoading.set(true);

      this.pokemonService.loadPage(page! - 1) // API base 0
        .subscribe({
          next: (response) => {
            this.pokemons.set(response);
            this.isLoading.set(false);
            this.title.setTitle(`Pokémon - Página ${page}`);
          },
          error: () => this.isLoading.set(false)
        });
    });
  }

  // SOLO cambia URL (no carga data directamente)
  changePage(delta: number) {
    const current = this.currentPage();
    const nextPage = Math.max(1, current! + delta);

    this.router.navigate([], {
      queryParams: { page: nextPage },
      queryParamsHandling: 'merge'
    });
  }

}
