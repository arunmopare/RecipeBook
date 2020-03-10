import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recepies: Recipe[] = [
  new Recipe ('a test recipe', 'This is simply a text', 'https://www.ambitiouskitchen.com/wp-content/uploads/2018/07/jerkskillet-3-725x725.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
