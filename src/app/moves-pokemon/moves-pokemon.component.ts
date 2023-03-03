import { Component, Input } from '@angular/core';
import { moves } from '../shared/models/pokemon';

@Component({
  selector: 'app-moves-pokemon',
  templateUrl: './moves-pokemon.component.html',
  styleUrls: ['./moves-pokemon.component.scss']
})
export class MovesPokemonComponent {

  @Input() moves! : moves[]

}
