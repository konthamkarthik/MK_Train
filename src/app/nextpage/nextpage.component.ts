import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Movie } from '../movie';
import { HEROES,Movies } from '../mock-heros';
import { ExampleService } from '../services/name.service'
 
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css'],
  providers: [ExampleService]
})
export class NextpageComponent implements OnInit {
  heroes = HEROES; 
  selectedHero: Hero;
  heroDetails : Hero;
  valueDetails:Movie[];  
 
  constructor(private _exampleService:ExampleService) { 
    
  }
 
  ngOnInit() {
    this.valueDetails=this._exampleService.movieList();
    console.log(this.valueDetails);
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroDetails = null;
  }


  onDetail(hero: Hero): void{
    this.heroDetails = hero;
    alert(hero);
  }
}