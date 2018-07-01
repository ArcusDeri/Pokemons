import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shoppinglist',
    templateUrl: './shoppinglist.component.html'
})

export class ShoppinglistComponent{
    ingredients: Ingredient[] = [
        new Ingredient('Mint leaf', 5),
        new Ingredient('Grass', 10)
    ];

}