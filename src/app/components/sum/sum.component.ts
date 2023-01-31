import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  valor1: any;
  valor2: any;
  valor3: any;
  resultado: any;

  constructor() { }

  ngOnInit() {
    this.valor1 = localStorage.getItem("valor1") || 0;
    this.valor2 = localStorage.getItem("valor2") || 0;
    this.valor3 = localStorage.getItem("valor3") || 0;
  }

  sumar(valor1: any, valor2: any,valor3: any): void {
    this.valor1 = (valor1 !== "") ? parseInt(valor1, 10) : 0;
    this.valor2 = (valor2 !== "") ? parseInt(valor2, 10) : 0;
    this.valor3 = (valor3 !== "") ? parseInt(valor3, 10) : 0;
    this.resultado = this.valor1 + this.valor2 + this.valor3;

    localStorage.setItem("valor1", this.valor1.value);
    localStorage.setItem("valor2", this.valor2.value);
    localStorage.setItem("valor3", this.valor3.value);
  }

  limpiar(){
    this.resultado = '';
  }
  

}
  