import { ListaCorridasComponent } from './lista-corridas/lista-corridas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCorridaComponent } from './form-corrida/form-corrida.component';
import { CalculoPaceComponent } from './shared/calculo-pace/calculo-pace.component';

const routes: Routes = [
  { path: 'corrida', component: FormCorridaComponent },
  { path: 'lista-corridas', component: ListaCorridasComponent },
  { path: 'edit', component: FormCorridaComponent },
  { path: 'calculo-pace', component: CalculoPaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
