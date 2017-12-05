import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   model: any = {};
    loading = false;
    returnUrl: string;
 constructor(
  private router: Router
  ){}
   login() {
        this.loading = true;
        this.router.navigateByUrl('/home');
    }

}
