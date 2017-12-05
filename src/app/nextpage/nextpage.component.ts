import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
 
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
 
  heroes = HEROES;
 debugger;
  selectedHero: Hero;
  heroDetails : Hero;
 
 
  constructor() { }
 
  ngOnInit() {
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