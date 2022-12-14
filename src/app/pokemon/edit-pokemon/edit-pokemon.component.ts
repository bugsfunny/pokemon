import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
  <h2 class="center">Editer {{pokemon?.name }}</h2>
  <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture" alt="{{pokemon.name}}'s picture">
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class EditPokemonComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | undefined;
  newSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.newSubscription = this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => { this.pokemon = pokemon });
    }
  }

  ngOnDestroy(): void {
    this.newSubscription.unsubscribe();
  }

}
