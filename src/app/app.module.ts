import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { FormsModule } from '@angular/forms';
import { StatsPokemonComponent } from './stats-pokemon/stats-pokemon.component';
import { TypesPokemonComponent } from './types-pokemon/types-pokemon.component';
import { MovesPokemonComponent } from './moves-pokemon/moves-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    StatsPokemonComponent,
    TypesPokemonComponent,
    MovesPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
