import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Vehicule } from './vehicule';
import { VehiculeService } from './vehicule.service';

@Component({
  selector: 'my-vehicule',
styles: [`
  
  .selected {
    background-color: #607D8B !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 20em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template: `
  <h2>Mes Véhicules</h2>
  <ul class="heroes">
    <li *ngFor="let vehicule of vehicules" (click)="onSelect(vehicule)" [class.selected]="vehicule === selectedVehicule">
      <span class="badge">{{vehicule.id}}</span> {{vehicule.name}} // {{vehicule.type}} // Passagers : {{vehicule.passengers}}
    </li>
  </ul>
  <my-vehicule-detail [vehicule]="selectedVehicule"></my-vehicule-detail>
  `
})

export class VehiculeComponent implements OnInit {
  vehicules = Vehicule[''];
  selectedVehicule: Vehicule;
  onSelect(vehicule: Vehicule): void {
    this.selectedVehicule = vehicule;
  }
  constructor(private vehiculeService: VehiculeService) { }
  getVehicule(): void {
    this.vehiculeService.getVehicule().then(vehicules => this.vehicules = vehicules);
  }
  ngOnInit(): void {
    this.getVehicule();
  }
}