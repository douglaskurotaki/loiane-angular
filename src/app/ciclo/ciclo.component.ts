import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
	AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input() valorInicial: number = 10;

  constructor() {
		console.log("constructor");
	 }

	 ngOnChanges(){
		console.log('ngOnChanges');		
	}

  ngOnInit() {
		console.log('ngOnInit');
		
	}

	ngDoCheck(){
		console.log('ngDoCheck');
		
	}

	ngAfterContentInit(){
		console.log('ngAfterContentInit');
		
	}

	ngAfterContentChecked(){
		console.log('ngAfterContentChecked');
		
	}

	ngAfterViewInit(){
		console.log('ngAfterViewInit');
		
	}

	ngAfterViewChecked(){
		console.log('ngAfterViewChecked');
		
	}

	ngOnDestroy(){
		console.log('ngOnDestroy');
		
	}

}
