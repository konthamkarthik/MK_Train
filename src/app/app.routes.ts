import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { LoginComponent } from './login/login.component';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: HomeComponent,
  children: [   
    { path: 'cats', component: NextpageComponent },
  { path: 'nextpage', component: NextpageComponent }]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/login', pathMatch:'full'} 
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);