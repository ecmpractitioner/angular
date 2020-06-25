import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]=[
    new Ingredient("Test Name",10),
    new Ingredient("Test Name1",20)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
