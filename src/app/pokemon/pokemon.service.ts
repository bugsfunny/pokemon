import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) { }
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemons').pipe(
      tap((pokemonList) => { console.table(pokemonList) }),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`http://localhost:3000/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => { console.table(pokemon) }),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch<Pokemon>(`http://localhost:3000/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap((pokemon) => { console.table(pokemon) }),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  searchPokemon(s: string): Observable<Pokemon[] | undefined> {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemons?name_like=${s}`).pipe(
      tap((pokemonList) => { console.table(pokemonList) }),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }
}
