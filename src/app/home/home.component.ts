import { Component, OnInit } from '@angular/core';

import { LogrosService } from './../service/logros.service';

@Component({
  selector: 'product-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logros: Ilogro[];
  title: string = 'Bienvenido al mundo de dragoon ball';

  constructor(private logrosService: LogrosService) { }

  ngOnInit() {
    this.logros = this.logrosService.all();
  }
}

// id,title,description

export interface Ilogro {
  id: number;
  title: string;
  description ?: string;
}
