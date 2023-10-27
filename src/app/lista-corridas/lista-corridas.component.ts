import {OnInit, Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-corridas',
  templateUrl: './lista-corridas.component.html',
  styleUrls: ['./lista-corridas.component.css']
})
export class ListaCorridasComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  corrida!: Corrida;
  corridas?: Corrida[];
  totalDeCorridas: number = 0;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.corrida = new Corrida('', '', '', '', 0, 0, '', 0);
    this.corridas = ELEMENT_DATA;
    this.totalDeCorridas = ELEMENT_DATA.length;
    this.preparaModal();
  }

  onEdit(corrida: Corrida) {
    let clone = Corrida.clone(corrida);
    this.corrida = clone;
    this.router.navigate(['/edit', corrida.id]);
  }

  onDelete() {
    alert("Delete...");
  }

  onSubmit() {
    alert('Corrida gravada com sucesso!');
  }

  private preparaModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }
}

const ELEMENT_DATA: Corrida[] = [
  {id: '1', dataInicio: '20/10/2023', horaInicio: '07:10', dataFinal: '20/10/2023', horaFinal: '08:10', distancia: 10, pace: 5.2, tipo: 'LONGO', fcm: 154},
  {id: '2', dataInicio: '20/10/2023', horaInicio: '07:10', dataFinal: '20/10/2023', horaFinal: '08:10', distancia: 10, pace: 5.2, tipo: 'LONGO', fcm: 154},
  {id: '3', dataInicio: '20/10/2023', horaInicio: '07:10', dataFinal: '20/10/2023', horaFinal: '08:10', distancia: 10, pace: 5.2, tipo: 'LONGO', fcm: 154},
  {id: '4', dataInicio: '20/10/2023', horaInicio: '07:10', dataFinal: '20/10/2023', horaFinal: '08:10', distancia: 10, pace: 5.2, tipo: 'LONGO', fcm: 154},
  {id: '5', dataInicio: '20/10/2023', horaInicio: '07:10', dataFinal: '20/10/2023', horaFinal: '08:10', distancia: 10, pace: 5.2, tipo: 'LONGO', fcm: 154},
];
