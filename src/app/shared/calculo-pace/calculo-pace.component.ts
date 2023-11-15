import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-pace',
  templateUrl: './calculo-pace.component.html',
  styleUrls: ['./calculo-pace.component.css']
})
export class CalculoPaceComponent {

  pace = '';

  calcular(valor: string) {
    this.pace = valor;
  }

}
