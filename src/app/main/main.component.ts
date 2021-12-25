import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';

interface Persona {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  `
    .text-center.col-2 { 
      cursor: pointer;
    }
  `
  ]
})

export class MainComponent implements OnInit {

  listadoPersonas: Persona[]= [];
  page = 1;
  cantidadRegistros = 3;
  coleccionPersonas = 6;
  path: any;
  order: any;
  iconClass: string = 'fa fa-sort';
  estado: boolean = false;

  constructor( private consultaService: ConsultaService ) { }

  ngOnInit(): void {
    this.consultaService.personas().subscribe( ({data}) => {
      this.listadoPersonas = data;
    });
  }
}
