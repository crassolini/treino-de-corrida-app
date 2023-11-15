import { CorridaRestService } from './../services/corrida-rest.service';
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
  totalDeCorridas: number;

  isLoadData = false;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private router: Router,
    private corridaStorageService: CorridaStorageService,
    private corridaRestService: CorridaRestService
  ) {
    this.totalDeCorridas = 0;
  }

  ngOnInit(): void {
    this.corrida = new Corrida('', '', '', '', 0, '', '', 0);

    //Obtém corridas do serviço
    this.listaCorridas();
    //Se não disponível, obtém do local storage
    if (!this.isLoadData) {
      this.corridas = this.corridaStorageService.getCorridas();
      this.totalDeCorridas = this.corridas?.length === undefined ? 0 : this.corridas.length;
    }

    this.preparaModal();
  }

  onEdit(corrida: Corrida) {
    let clone = Corrida.clone(corrida);
    this.corrida = clone;
    this.router.navigate(['/edit', corrida]);
  }

  onDelete(corrida: Corrida) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + corrida.id
    );

    if (!confirmation) {
      return;
    }

    this.message = '';
    this.corridaRestService.delete(corrida).subscribe({
      next: (res) => {
        console.log('O id ' + corrida.id + ' foi removido com sucesso');
        this.message = 'O id ' + corrida.id + ' foi removido com sucesso';
      }
    });

    let response: boolean = this.corridaStorageService.delete(corrida.id);
    this.isShowMessage = true;
    this.isSuccess = response;

    if (response) {
      if (this.message == '') {
        this.message = 'O id ' + corrida.id + ' foi removido com sucesso';
      }
      console.log('O item foi removido com sucesso!');
    } else {
      console.log('O item não pode ser removido!');
    }

    this.corridas = this.corridaStorageService.getCorridas();
    this.listaCorridas();
    this.corridaStorageService.notifyTotalCorridas();
  }

  onSubmit() {
    alert('Corrida gravada com sucesso!');
  }

  private preparaModal() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }

  listaCorridas() {
    this.corridaRestService.getAll().subscribe({
      next: (corridas) => {
        this.corridas = corridas;
        this.isLoadData = true;
        this.totalDeCorridas = this.corridas?.length === undefined ? 0 : this.corridas.length;
      },
      error: (error) => {
        console.log(error);
        this.corridas = this.corridaStorageService.getCorridas();
        this.totalDeCorridas = this.corridas?.length === undefined ? 0 : this.corridas.length;
      }
    });
  }

}
