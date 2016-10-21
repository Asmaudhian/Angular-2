import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Vehicule } from './vehicule';
import { VehiculeService } from './vehicule.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  vehicules: Vehicule[] = [];

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.vehiculeService.getVehicule().then(vehicules => this.vehicules = vehicules.slice(1, 5));
  }

  gotoDetail(vehicule: Vehicule): void { /* not implemented yet */}
}
