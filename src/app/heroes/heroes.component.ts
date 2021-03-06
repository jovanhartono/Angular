import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
//  selectedHero? : Hero

  // onSelect(hero : Hero) : void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`Heroes Component : Selected hero id = ${hero.id}`);
  // }

  getHeroes() : void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // hero: Hero = {
  //   id: 1,
  //   name:'Windranger'
  // };

  constructor(private heroService : HeroService, private messageService : MessageService) { 

  }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void{
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
    .subscribe(data => { 
      this.heroes.push(data); 
    })
  }

}
