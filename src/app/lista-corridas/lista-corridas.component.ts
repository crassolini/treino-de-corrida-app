import { CorridaStorageService } from './../services/corrida-storage.service';
import { OnInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-corridas',
  templateUrl: './lista-corridas.component.html',
  styleUrls: ['./lista-corridas.component.css'],
  providers: [CorridaStorageService],
})
export class ListaCorridasComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  corrida!: Corrida;
  corridas?: Corrida[];
  totalDeCorridas: number = 0;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private router: Router,
    private corridaService: CorridaStorageService
  ) {}

  ngOnInit(): void {
    this.corrida = new Corrida('', '', '', '', 0, 0, '', 0);
    this.corridas = this.corridaService.getCorridas();
    this.totalDeCorridas = this.corridas.length;
    this.preparaModal();
  }

  onEdit(corrida: Corrida) {
    let clone = Corrida.clone(corrida);
    this.corrida = clone;
    this.router.navigate(['/edit', corrida]);
  }

  onDelete(id: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + id
    );

    if (!confirmation) {
      return;
    }

    let response: boolean = this.corridaService.delete(id);
    this.isShowMessage = true;
    this.isSuccess = response;

    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'O item não pode ser removido!';
    }

    this.corridas = this.corridaService.getCorridas();
    this.corridaService.notifyTotalCorridas();
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
  {
    id: '1',
    dataInicio: '20/10/2023',
    horaInicio: '07:10',
    dataFinal: '20/10/2023',
    horaFinal: '08:10',
    distancia: 10,
    pace: 5.2,
    tipo: 'LONGO',
    fcm: 154,
  },
  {
    id: '2',
    dataInicio: '20/10/2023',
    horaInicio: '07:10',
    dataFinal: '20/10/2023',
    horaFinal: '08:10',
    distancia: 10,
    pace: 5.2,
    tipo: 'LONGO',
    fcm: 154,
  },
  {
    id: '3',
    dataInicio: '20/10/2023',
    horaInicio: '07:10',
    dataFinal: '20/10/2023',
    horaFinal: '08:10',
    distancia: 10,
    pace: 5.2,
    tipo: 'LONGO',
    fcm: 154,
  },
  {
    id: '4',
    dataInicio: '20/10/2023',
    horaInicio: '07:10',
    dataFinal: '20/10/2023',
    horaFinal: '08:10',
    distancia: 10,
    pace: 5.2,
    tipo: 'LONGO',
    fcm: 154,
  },
  {
    id: '5',
    dataInicio: '20/10/2023',
    horaInicio: '07:10',
    dataFinal: '20/10/2023',
    horaFinal: '08:10',
    distancia: 10,
    pace: 5.2,
    tipo: 'LONGO',
    fcm: 154,
  },
];
