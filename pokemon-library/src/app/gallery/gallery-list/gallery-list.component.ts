import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
    selector: 'app-gallery-list',
    templateUrl: './gallery-list.component.html'
})

export class GalleryListComponent{
    pokemons: Pokemon[] = [
        new Pokemon('Bulbasaur','Example pokemon.','https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png')
    ];
    
}