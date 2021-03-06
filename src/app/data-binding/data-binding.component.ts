import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	url: String = 'http://google.com';
	cursoAngular: Boolean = true;
	urlImagem: 'http://lorempixel.com/400/200/nature/';
	valorAtual: String = '';
	valorSalvo: String;
	isMouseOver: Boolean;
	nome: String = 'abc';
	pessoa = {
		nome: 'def',
		idade: 17,
		end: 'Rua'
	}
	nomeDoCurso: String = 'Angular';
	
	valorInicial = 15;

  constructor() { }

  ngOnInit() {
	}
	
	getValor(){
		return 1;
	}

	getCurtirCurso(){
		return true;
	}

	botaoClicado(){
		alert('Botão clicado');
	}

	onKeyUp(evento: KeyboardEvent){
		this.valorAtual = (<HTMLInputElement>evento.target).value;
	}

	salvarValor(valor){
		this.valorSalvo = valor;
	}

	onMouseOverOut(){
		this.isMouseOver = !this.isMouseOver;
	}

	onMudouValor(evento){
		console.log(evento);
	}
}
