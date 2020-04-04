import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rec-detail',
  templateUrl: './rec-detail.component.html',
  styleUrls: ['./rec-detail.component.scss']
})
export class RecDetailComponent implements OnInit {
  form: FormGroup;
  submited = false;
  color = '#65DB6F';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      sugerencia: ''
    });
  }

  submit(): void {
    this.submited = true;
    console.log(this.form.value);
  }

}
