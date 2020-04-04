import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recomendacion } from '../../core/models/recomendacion.model';

@Component({
  selector: 'app-rec-card',
  templateUrl: './rec-card.component.html',
  styleUrls: ['./rec-card.component.scss']
})
export class RecCardComponent implements OnInit {

  constructor( private router: Router) { }

  @Input() reco: Recomendacion;
  color: string;

  ngOnInit(): void {
    this.getColor();
  }

  getColor(): void {
    const genero = this.reco.genero;
    switch (genero) {
      case 'policial':
        this.color = 'black';
        break;
      case 'fantasia epica':
        this.color = 'green';
        break;
      case 'ciencia ficcion':
        this.color = 'blue';
        break;
      case 'romantico':
        this.color = 'red';
        break;
    }
  }

 async goToDetail(id: any): Promise<void> {
   await this.router.navigate([`give/${id}`]);
  }
}
