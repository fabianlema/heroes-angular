import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:any[] = [];
  term:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.term=params['term'];
      this.heroes = this._heroesService.showHeroes( params['term']);
      console.log(this.heroes);
    });
  }
  // showHeroe(index:number){
  //   this._router.navigate(['/heroe', index]);
  // }

}
