import { Component, OnInit } from '@angular/core';
import { Recomendacion } from '../../core/models/recomendacion.model';
import { RecosService } from '../../core/services/recos.service';

@Component({
  selector: 'app-give-rec',
  templateUrl: './give-rec.component.html',
  styleUrls: ['./give-rec.component.scss']
})
export class GiveRecComponent implements OnInit {

  constructor(private recosService: RecosService) { }

  active: 'ficcion' | 'noficcion' = 'ficcion';

  reco: Recomendacion = {
    autores: 'borges',
    descripcion: 'dragones, espadas , peleas y sexo',
    extension: 'novela',
    genero: 'policial'
  };

  recos: Array<Recomendacion>;

  ngOnInit(): void {
    this.recos = this.recosService.getAll();
  }

}
