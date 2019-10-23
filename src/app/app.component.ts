import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'primeiro-projeto';
	valor: number = 5;
	deletarCiclo: Boolean = false;

	mudarValor(){
		this.valor++;
	}

	destruirCiclo(){
		this.deletarCiclo = true;
	}
}
