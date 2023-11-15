import { Resposta } from 'src/app/model/resposta';
import { Corrida } from './../../../model/corrida';
import { UtilService } from './../../../services/util.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultado-pace',
  templateUrl: './resultado-pace.component.html',
  styleUrls: ['./resultado-pace.component.css']
})
export class ResultadoPaceComponent {

  @Output() calculoPaceEvent = new EventEmitter<string>();

  constructor(private utilService: UtilService) {}

  calcular(distancia: string, hora: string, min: string, seg: string) {
    let resultado = this.utilService.calculoPacePorValores(Number(distancia), Number(hora), Number(min), Number(seg));

    if (resultado == '') {
      this.calculoPaceEvent.emit('');
    } else {
      let pace = resultado.split(':');
      if (pace[1] === '60') {
        pace[1] = '00';
        pace[0] = (Number(pace[0]) + 1).toString();
      }
      this.calculoPaceEvent.emit('Seu tempo é de ' + pace[0] + ':' + pace[1].padStart(2, '0') + ' minutos para percorrer um quilômetro');
    }
  }
}
