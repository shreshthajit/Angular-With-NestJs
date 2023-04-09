import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';

const routes: Routes=[
  {
    path:'',
    component:AllSuperHeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
