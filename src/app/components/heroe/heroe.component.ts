import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any ={};

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
  ) {
    // Escuchar los cambios de esos parametros
    // Subscribirnos al observador
    this._activatedRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe( params['id']);
    });
   }



}
