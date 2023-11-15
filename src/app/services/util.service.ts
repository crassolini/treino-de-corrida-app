import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { Resposta } from '../model/resposta';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  resposta!: Resposta;

  constructor() { }

  calculoPacePorCorrida(corrida: Corrida): Resposta {

    // lógica aqui
    this.resposta = new Resposta();

    if (!this.validaDistancia(corrida)) {
      this.resposta.valor = '';
      this.resposta.mensagem = 'Valor informado na distância deve ser numérico.';
      this.resposta.erro = true;
      return this.resposta;
    }
    let distancia: string = corrida.distancia.toString();

    let inicioData = corrida.dataInicio.split('-');
    let inicioHora = corrida.horaInicio.split(':');
    let inicio = new Date(Number(inicioData[0]), Number(inicioData[1]), Number(inicioData[2]));
    inicio.setHours(Number(inicioHora[0]), Number(inicioHora[1]), 0, 0);

    let finalData = corrida.dataFinal.split('-');
    let finalHora = corrida.horaFinal.split(':');
    let fim = new Date(Number(finalData[0]), Number(finalData[1]), Number(finalData[2]));
    fim.setHours(Number(finalHora[0]), Number(finalHora[1]), 0, 0);

    let diffMilissegundos = fim.getTime() - inicio.getTime();
    let diffSegundos = diffMilissegundos / 1000;
    let diffMinutos = diffSegundos / 60;
    let diffHoras = Math.trunc(diffMinutos / 60);

    distancia = distancia.replace(',', '.');

    this.resposta.valor = this.calculoPacePorValores(Number(distancia), 0, 0, diffSegundos);

    this.resposta.mensagem = 'Pace calculado com sucesso.';
    this.resposta.erro = false;
    console.log(distancia);

    return this.resposta;
  }

  calculoPacePorValores(distancia: number, ho: number, mi: number, se: number): string {
    let totalMinutes: number = ho * 60 + mi + se / 60,
    pace: number = totalMinutes / distancia,
    paceMinutes: number = Math.floor(pace),
    paceSeconds: number = Math.round((pace - paceMinutes) * 60);

    if (isNaN(paceMinutes) || isNaN(paceSeconds)) {
      return '';
    } else {
      return paceMinutes + ':' + paceSeconds.toString().padStart(2, '0');
    }
  }

  private validaDistancia(corrida: Corrida): boolean {
    let distancia = corrida.distancia;
    distancia = Number(distancia.toString().replace(',', '.'));

    if (isNaN(Number(distancia)) || Number(distancia) <= 0) {
      return false;
    }
    return true;
  }

}
