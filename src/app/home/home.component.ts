import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logros: Ilogro[];
  title: string = 'Bienvenido al mundo de dragoon ball';

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros();
  }

  getLogros(): Ilogro[] {
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

// id,title,description

interface Ilogro {
  id: number;
  title: string;
  description ?: string;
}
