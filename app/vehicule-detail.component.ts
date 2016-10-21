import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import { Vehicule } from './vehicule';
import { VehiculeService } from './vehicule.service';

@Component({
  selector: 'my-vehicule-detail',
  template: `
 <div *ngIf="vehicule">
  <h2>Le véhicule séléctionné est : {{vehicule.name}}</h2>
  <div><label>id: </label>{{vehicule.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="vehicule.name" placeholder="name"/>
  </div>
</div>
  `,
})

export class VehiculeDetailComponent implements OnInit{
  @Input()
  vehicule: Vehicule;
  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.vehiculeService.getVehicule(id)
      .then(vehicule => this.vehicule = vehicule);
  });
}

}
