import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Mainpages/home/home.component';
import { AboutUsComponent } from './Mainpages/about-us/about-us.component';

const routes : Routes = [
  { path: ' ', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent}
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
