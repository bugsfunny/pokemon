import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;

  constructor(private router: Router) { }

  selectPokemon(pokemonId: number) {
    // const pokemon: Pokemon|undefined = this.pokemonList.find(it => pokemon?.id === pokemonId)
    // this.pokemonSelected = pokemon;
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }
}
