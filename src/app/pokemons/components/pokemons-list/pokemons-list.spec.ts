import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsList } from './pokemons-list';

describe('PokemonsList', () => {
  let component: PokemonsList;
  let fixture: ComponentFixture<PokemonsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsList],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
