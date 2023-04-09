import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHero } from '../super-hero';

@Component({
  selector: 'app-all-super-heroes',
  templateUrl: './all-super-heroes.component.html',
  styleUrls: ['./all-super-heroes.component.css'],
})
export class AllSuperHeroesComponent implements OnInit {
  constructor(private superHeroService: SuperHeroesService) {}

  superHeroes:SuperHero[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.superHeroService.get().subscribe((data) => {
       console.log(data);
       this.superHeroes = data;
    });
  }
}
