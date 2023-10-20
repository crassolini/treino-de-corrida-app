import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-form-corrida',
  templateUrl: './form-corrida.component.html',
  styleUrls: ['./form-corrida.component.css']
})
export class FormCorridaComponent {

  ngOnInit(): void {

    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);

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

  onSubmit() {
    alert('Corrida gravada com sucesso!');
  }
}
