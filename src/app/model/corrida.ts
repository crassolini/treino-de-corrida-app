export class Corrida {
  id!: string;
  dataInicio: string;
  horaInicio: string;
  dataFinal: string;
  horaFinal: string;
  distancia: number;
  pace: number;
  tipo: string;
  fcm: number;

  constructor(
    dataInicio: string,
    horaInicio: string,
    dataFinal: string,
    horaFinal: string,
    distancia: number,
    pace: number,
    tipo: string,
    fcm: number
  ) {
    this.id = String(Math.round(Math.random() * 1000));
    this.dataInicio = dataInicio;
    this.horaInicio = horaInicio;
    this.dataFinal = dataFinal;
    this.horaFinal = horaFinal;
    this.distancia = distancia;
    this.pace = pace;
    this.tipo = tipo;
    this.fcm = fcm;
  }

  public static clone(corrida: Corrida) {
    let c = new Corrida('', '', '', '', 0, 0, '', 0);

    c.id = String(Math.round(Math.random() * 1000));
    c.dataInicio = corrida.dataInicio;
    c.horaInicio = corrida.horaInicio;
    c.dataFinal = corrida.dataFinal;
    c.horaFinal = corrida.horaFinal;
    c.distancia = corrida.distancia;
    c.pace = corrida.pace;
    c.tipo = corrida.tipo;
    c.fcm = corrida.fcm;

    return c;
  }
}
