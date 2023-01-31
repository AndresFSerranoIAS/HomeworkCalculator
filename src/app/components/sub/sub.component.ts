import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  valor1: any;
  valor2: any;
  resultado: any;

  constructor() { }

  ngOnInit() {
    this.valor1 = localStorage.getItem("valor1") || 0;
    this.valor2 = localStorage.getItem("valor2") || 0;
  }

  restar(valor1: any, valor2: any): void {
    this.valor1 = (valor1 !== "") ? parseInt(valor1, 10) : 0;
    this.valor2 = (valor2 !== "") ? parseInt(valor2, 10) : 0;
    this.resultado = this.valor1-this.valor2

    localStorage.setItem("valor1", this.valor1.value);
    localStorage.setItem("valor2", this.valor2.value);
  }

  limpiar(){
    this.resultado = '';
  }
}
