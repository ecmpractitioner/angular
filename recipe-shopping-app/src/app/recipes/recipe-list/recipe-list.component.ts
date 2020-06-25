import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[]=[
    new Recipe('Raagi Ball','Healthy & Delicious','https://upload.wikimedia.org/wikipedia/commons/0/03/Upsaaru_lunch.jpg'),
    new Recipe('Masala Dosa','Yummy & Crispy','https://upload.wikimedia.org/wikipedia/commons/e/e1/Masala_Dosa_%2827429188304%29.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
