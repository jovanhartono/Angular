import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{
  createDb(){
    const heroes = [
      { id: 11,  name: 'Shadow Fiend'},
      { id: 12,  name: 'Bloodseeker'},
      { id: 13,  name: 'Enigma'},
      { id: 14,  name: 'TideHunter'},
      { id: 15,  name: 'Dark Seer'},
      { id: 16,  name: 'Abaddon'},
      { id: 17,  name: 'Nature Prophet'},
      { id: 18,  name: 'Slark'},
      { id: 19,  name: 'Zeus'},
      { id: 20,  name: 'Witch Doctor'}
    ];

    return {heroes};
  }

  genId(heroes : Hero[]) : number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
