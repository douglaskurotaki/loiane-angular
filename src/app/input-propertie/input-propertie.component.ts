import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propertie.component.html',
  styleUrls: ['./input-propertie.component.css']
})
export class InputPropertieComponent implements OnInit {
	@Input('nome') nomeCurso: String = '';

  constructor() { }

  ngOnInit() {
  }

}
