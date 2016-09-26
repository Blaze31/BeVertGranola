import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo:'/about', pathMatch: 'full' },
  {path: 'about', component:AboutComponent}
];

export const routing = RouterModule.forRoot(routes);