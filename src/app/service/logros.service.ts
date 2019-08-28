import { Ilogro } from './../home/home.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  constructor() { }

  all(): Ilogro[] {
    return [{
      id: 1,
      title: 'la batalla de los dioses',
      description: 'goku pelea con bills y le gana'
    },
    {
      id: 2,
      title: 'El regreso de freezer',
      description: 'freezer resucita y va a pelear con goku'
    },
    {
      id: 3,
      title: 'La pelea de broly',
      description: 'broly llega a la tierra y pelea con goku'
    }];
  }
}
