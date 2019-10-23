import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.css']
})
export class OutputpropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}

	@Input() valor: number = 0;

	@Output() mudouValor = new EventEmitter();

	@ViewChild('campoInput', {static: true}) campoValorInput: ElementRef;
	
	incrementa(){		
		this.valor = this.campoValorInput.nativeElement.value++;
		// this.valor++; 
		this.mudouValor.emit({novoValor: this.valor});
	}

	decrementa(){		
		this.valor = this.campoValorInput.nativeElement.value--;
		// this.valor--;
		this.mudouValor.emit({novoValor: this.valor});
	}

}
