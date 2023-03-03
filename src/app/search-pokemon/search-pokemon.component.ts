import { Component } from '@angular/core';
import { pokemon } from '../shared/models/pokemon';
import { PokeService } from '../shared/services/poke/poke.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent {

  isLoading : boolean = false;

  errorMessage! : string | undefined

  id! : number;

  selectedPokemon! : pokemon | undefined

  constructor(private _pokeService: PokeService){}


  searchById(){

    this.isLoading = true;
    this.selectedPokemon = undefined
    this.errorMessage = undefined

    this._pokeService.getPokemonById(this.id).subscribe({
      next : (value) => {
        this.selectedPokemon = value
        this.isLoading = false;
      },
      error : (err) => {
        this.errorMessage = err.error
        this.isLoading = false;
      },
    })
  }

}
