import { Injectable } from '@angular/core';
import { Recomendacion } from '../models/recomendacion.model';

@Injectable({
  providedIn: 'root'
})
export class RecosService {

  constructor() { }

  recos: Array<Recomendacion> = [
    {
    autores: 'borges',
    genero: 'policial',
    descripcion: 'dragones, espadas, peleas y sexo',
    extension: 'novela'
  },
    {
      autores: 'borges',
      genero: 'fantasia epica',
      descripcion: 'dragones, espadas, peleas y sexo',
      extension: 'novela'
    },
    {
      autores: 'borges',
      genero: 'romantico',
      descripcion: 'dragones, espadas, peleas y sexo',
      extension: 'novela'
    },
    {
      autores: 'borges',
      genero: 'ciencia ficcion',
      descripcion: 'dragones, espadas, peleas y sexo',
      extension: 'novela'
    },
  ];

  addReco(reco: Recomendacion): void {
    reco.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const res = this.getAll();
    console.log(res);
    if (res === null) {
      const recos = [];
      recos.push(reco);
      localStorage.setItem('reco', JSON.stringify(recos));
    } else {
      const recos: Array<any> = [];
      recos.push(res);
      recos.push(reco);
      localStorage.setItem('reco', JSON.stringify(recos));
    }
  }

  getAll(): Array<Recomendacion> {
    return this.recos;
  }
}
