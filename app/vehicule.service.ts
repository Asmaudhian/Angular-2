import { Injectable } from '@angular/core';

import { Vehicule } from './vehicule';
import { VEHICULE } from './mock-vehicule';

@Injectable()
export class VehiculeService {
    getVehicule(id: number): Promise<Vehicule[]> {
        return Promise.resolve(VEHICULE);
    }
}