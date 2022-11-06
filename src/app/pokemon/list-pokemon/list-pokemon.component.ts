import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;
  // pokemonSelected: Pokemon|undefined;

  constructor(private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }



  selectPokemon(pokemonId: number) {
    // const pokemon: Pokemon|undefined = this.pokemonList.find(it => pokemon?.id === pokemonId)
    // this.pokemonSelected = pokemon;
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }
}
