import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-corridas',
  templateUrl: './total-corridas.component.html',
  styleUrls: ['./total-corridas.component.css']
})
export class TotalCorridasComponent {
  @Input() total = 0;
}
