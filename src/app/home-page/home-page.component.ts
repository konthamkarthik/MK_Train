import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { ExampleService } from '../services/name.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

value:Hero[];
 hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
  private router: Router,
  private _exampleService:ExampleService
  ){}

  ngOnInit() {
    this.value=this._exampleService.someMethod();
  }
  logout() {        
        this.router.navigateByUrl('/login');
    }
}
