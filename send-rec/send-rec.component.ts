import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Recomendacion } from '../core/models/recomendacion.model';
import { RecosService } from '../core/services/recos.service';

@Component({
  selector: 'app-send-rec',
  templateUrl: './send-rec.component.html',
  styleUrls: ['./send-rec.component.scss']
})
export class SendRecComponent implements OnInit {

  constructor(public fb: FormBuilder, public recosService: RecosService) { }

  form = this.fb.group({
    genero: '',
    extension: '',
    autores: '',
    descripcion: ''
  });
  submited = false;

  ngOnInit(): void {
    this.recosService.getAll();
  }
  formSubmit(): void {
    const reco: Recomendacion = {
    genero : this.form.value.genero,
    extension : this.form.value.extension,
    autores : this.form.value.autores,
    descripcion : this.form.value.descripcion
  };
    console.log(reco);
    this.recosService.addReco(reco);
    this.submited = true;
  }

}
