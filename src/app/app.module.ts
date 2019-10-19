import { MeuFormModule } from './meu-form/meu-form.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertieComponent } from './input-propertie/input-propertie.component';

@NgModule({
  declarations: [
		AppComponent,
		MeuPrimeiroComponent,
		MeuPrimeiro2Component,
		DataBindingComponent,
		InputPropertieComponent		
  ],
  imports: [
		BrowserModule,
		FormsModule,
		CursosModule,
		MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
