import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {
  valor1: any;
  valor2: any;
  resultado: any;

  constructor() { }

  ngOnInit() {
    this.valor1 = localStorage.getItem("valor1") || 0;
    this.valor2 = localStorage.getItem("valor2") || 0;
  }

  dividir(valor1: any, valor2: any): void {
    this.valor1 = (valor1 !== "") ? parseInt(valor1, 10) : 0;
    this.valor2 = (valor2 !== "") ? parseInt(valor2, 10) : 0;
    if(this.valor2===0){
      this.resultado = "IMPOSIBLE DE CALCULAR";
    }
    else{
      this.resultado = this.valor1/this.valor2;
    }
   

    localStorage.setItem("valor1", this.valor1.value);
    localStorage.setItem("valor2", this.valor2.value);
  }

  limpiar(){
    this.resultado = '';
  }

}
