import { Component, Input } from '@angular/core';
import { types } from '../shared/models/pokemon';

@Component({
  selector: 'app-types-pokemon',
  templateUrl: './types-pokemon.component.html',
  styleUrls: ['./types-pokemon.component.scss']
})
export class TypesPokemonComponent {

  @Input() types! : types[]

}
