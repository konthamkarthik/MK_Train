import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component'

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: HomeComponent,
  children: [   
    {path: 'homepage', component: HomePageComponent},
    { path: 'cats', component: NextpageComponent },
  { path: 'nextpage', component: NextpageComponent },
  { path: '**', redirectTo: '/home/homepage', pathMatch:'full'}]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/login', pathMatch:'full'} 
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);