import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultado-pace',
  templateUrl: './resultado-pace.component.html',
  styleUrls: ['./resultado-pace.component.css']
})
export class ResultadoPaceComponent {

  @Output() calculoPaceEvent = new EventEmitter<string>();

  calcular(distancia: string, hora: string, min: string, seg: string) {

    distancia = distancia.replace(',', '.');

    if (isNaN(Number(distancia)) || isNaN(Number(hora)) || isNaN(Number(min)) || isNaN(Number(seg))) {
      alert('Resultado impossível de ser calculado. Verifique se as entradas são valores numéricos válidos.');
      return;
    }

    let dis = parseFloat(distancia);
    let nHora = parseFloat(hora);
    let nMin = parseFloat(min);
    let nSeg = parseFloat(seg);

    var totalMinutes = nHora * 60 + nMin + nSeg / 60,
    pace = totalMinutes / dis,
    paceMinutes = Math.floor(pace),
    paceSeconds = Math.round((pace - paceMinutes) * 60);

    if (isNaN(Number(paceMinutes)) || isNaN(Number(paceSeconds))) {
      this.calculoPaceEvent.emit('');
    } else {
      this.calculoPaceEvent.emit('Seu tempo é de ' + paceMinutes + " minutos e " + paceSeconds + ' segundos para percorrer um quilômetro');
    }
  }
}
