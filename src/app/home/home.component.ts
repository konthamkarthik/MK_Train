import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
  private router: Router
  ){}

  ngOnInit() {
  }
  logout() {        
        this.router.navigateByUrl('/login');
    }
}
