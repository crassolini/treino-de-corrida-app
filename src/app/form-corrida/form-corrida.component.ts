import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';

@Component({
  selector: 'app-form-corrida',
  templateUrl: './form-corrida.component.html',
  styleUrls: ['./form-corrida.component.css']
})
export class FormCorridaComponent {

  corrida!: Corrida;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  ngOnInit(): void {
    this.corrida = new Corrida('', '', '', '', 0, 0, '', 0);

    this.preparaFormSelect();
    this.preparaDatepicker();
    this.preparaTimepicker();
  }

  onSubmit() {
    alert('Corrida gravada com sucesso!');
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