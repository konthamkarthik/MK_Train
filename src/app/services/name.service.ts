import { Injectable } from '@angular/core';
import { HEROES, Details, Movies } from '../mock-heros';
import { Hero, Detail } from "../hero";
import { Movie } from '../movie';

@Injectable()

export class ExampleService {
    value: Hero[];
    valueDetails: Detail[];
    movieDetails: Movie[];

    constructor(){
        this.value = HEROES;
        this.valueDetails= Details;
        this.movieDetails=Movies;
    }
    
    // This is where your methods and properties go, for example: 

    someMethod() {
        console.log(this.valueDetails);
        return this.value;
    }
    movieList(){
        console. log(this.movieDetails);
        return this.movieDetails;
    }

}