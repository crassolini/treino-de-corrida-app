import { CorridaRestService } from './../services/corrida-rest.service';
import { CorridaPromiseService } from './../services/corrida-promise.service';
import { CorridaStorageService } from './../services/corrida-storage.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';
import { Resposta } from '../model/resposta';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-form-corrida',
  templateUrl: './form-corrida.component.html',
  styleUrls: ['./form-corrida.component.css'],
})
export class FormCorridaComponent {
  @ViewChild('form') form!: NgForm;

  corrida!: Corrida;
  corridas?: Corrida[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  tiposCorrida = ['Intervalado', 'Longo', 'Fartlek', 'Tempo Run', 'Leve'];

  constructor(
    private corridaStorageService: CorridaStorageService,
    private corridaPromiseService: CorridaPromiseService,
    private corridaRestService: CorridaRestService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.corridas = this.corridaStorageService.getCorridas();

    const objeto: Corrida = <Corrida>history.state;
    const isEditCorrida =
      objeto.hasOwnProperty('id') && objeto.hasOwnProperty('dataInicio');

    if (isEditCorrida) {
      this.corrida = <Corrida>objeto;
    } else {
      this.corrida = new Corrida('', '', '', '', 0, '', '', 0);
    }

    console.log(this.corrida);

    this.preparaDatepicker();
    this.preparaTimepicker();
  }

  ngAfterViewInit(): void {
    this.preparaFormSelect();
  }

  onSubmit() {
    this.isSubmitted = true;

    let resposta: Resposta = this.utilService.calculoPacePorCorrida(this.corrida);
    if (resposta.erro) {
      this.isShowMessage = true;
      this.isSuccess = false;

      this.message = resposta.mensagem;
      return;
    }
    this.corrida.pace = resposta.valor;

    this.corridaRestService.getById(this.corrida.id).subscribe({
      next: (res) => {
        this.update();
      },
      error: (e) => {
        this.insert();
      },
    });

    if (!this.corridaStorageService.isExist(this.corrida.id)) {
      this.corridaStorageService.save(this.corrida);
    } else {
      this.corridaStorageService.update(this.corrida);
    }

    this.isShowMessage = true;
    this.isSuccess = true;

    this.message = 'Corrida cadastrada com sucesso!';
  }

  private update() {
    console.log('Update: ' + this.corrida.id);
    this.corridaPromiseService
      .update(this.corrida)
      .then((data) => {
        console.log('Atualizado com sucesso na api: ' + JSON.stringify(data));
      })
      .catch((error) => {
        console.log(
          'Promise (update) rejeitada na api com: ' + JSON.stringify(error)
        );
      });
  }

  private insert() {
    console.log('Insert: ' + this.corrida.id);
    this.corridaPromiseService
      .save(this.corrida)
      .then((data) => {
        console.log('Inserido com sucesso na api: ' + JSON.stringify(data));
      })
      .catch((error) => {
        console.log(
          'Promise (insert) rejeitada na api com: ' + JSON.stringify(error)
        );
      });
  }

  private preparaFormSelect() {
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  private preparaDatepicker() {
    let datePicker = document.querySelectorAll('.datepicker');
    let datePickerOptions = {
      format: 'dd/mm/yyyy',
      i18n: {
        months: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        monthsShort: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ],
        weekdays: [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado',
        ],
        weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        cancel: 'Cancelar',
        clear: 'Limpar',
        done: 'Ok',
      },
    };
    M.Datepicker.init(datePicker, datePickerOptions);
  }

  private preparaTimepicker() {
    let timePicker = document.querySelectorAll('.timepicker');
    let timePickerOptions = {
      twelveHour: false,
      i18n: {
        cancel: 'Cancelar',
        clear: 'Limpar',
        done: 'Ok',
      },
    };
    M.Timepicker.init(timePicker, timePickerOptions);
  }
}
