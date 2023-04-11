import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SuperHero } from './super-hero';
@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  constructor(private http: HttpClient) {}

  get(){
    return this.http.get<SuperHero[]>("http://localhost:3000/super-heroes")
  }
  create(data:SuperHero){
    return this.http.post("http://localhost:3000/super-heroes",data);
  }
}
