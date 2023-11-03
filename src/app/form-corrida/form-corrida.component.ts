import { CorridaStorageService } from './../services/corrida-storage.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';

@Component({
  selector: 'app-form-corrida',
  templateUrl: './form-corrida.component.html',
  styleUrls: ['./form-corrida.component.css'],
  providers: [CorridaStorageService]
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

  constructor(private corridaService: CorridaStorageService) {}

  ngOnInit(): void {
    this.corridas = this.corridaService.getCorridas();

    const objeto: Corrida = <Corrida>history.state;
    const isEditCorrida = (objeto.hasOwnProperty('id') && objeto.hasOwnProperty('dataInicio'));
    if (isEditCorrida)
      this.corrida = <Corrida>objeto;
    else
      this.corrida = new Corrida('', '', '', '', 0, 0, '', 0);

    console.log(objeto);

    this.preparaDatepicker();
    this.preparaTimepicker();
  }

  ngAfterViewInit(): void {
    this.preparaFormSelect();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.corridaService.isExist(this.corrida.id)) {
      this.corridaService.save(this.corrida);
    } else {
      this.corridaService.update(this.corrida);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.corrida = new Corrida('', '', '', '', 0, 0, '', 0);

    this.corridas = this.corridaService.getCorridas();

    this.corridaService.notifyTotalCorridas();
  }

  private preparaFormSelect() {
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  private preparaDatepicker() {
    let datePicker = document.querySelectorAll('.datepicker');
    let datePickerOptions = {
      format: "dd/mm/yyyy",
      i18n: {
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        weekdays: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        weekdaysShort: ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        weekdaysAbbrev: ["D","S", "T", "Q", "Q", "S", "S"],
        cancel: 'Cancelar',
        clear: 'Limpar',
        done: 'Ok'
      }
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
        done: 'Ok'
      }
    };
    M.Timepicker.init(timePicker, timePickerOptions);
  }
}
