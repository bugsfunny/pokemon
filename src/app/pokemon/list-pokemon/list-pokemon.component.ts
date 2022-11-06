import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  pokemonList: Pokemon[] | undefined;
  newSubscription!: Subscription;

  constructor(private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.newSubscription = this.pokemonService.getPokemonList().subscribe((pokemonList) => { this.pokemonList = pokemonList })
  }

  selectPokemon(pokemonId: number) {
    // const pokemon: Pokemon|undefined = this.pokemonList.find(it => pokemon?.id === pokemonId)
    // this.pokemonSelected = pokemon;
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }

  ngOnDestroy(): void {
    this.newSubscription.unsubscribe();
  }
}
