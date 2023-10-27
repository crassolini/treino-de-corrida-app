import { ListaCorridasComponent } from './lista-corridas/lista-corridas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCorridaComponent } from './form-corrida/form-corrida.component';
import { EditCorridaComponent } from './components/edit-corrida/edit-corrida.component';

const routes: Routes = [
  { path: 'corrida', component: FormCorridaComponent },
  { path: 'lista-corridas', component: ListaCorridasComponent },
  { path: 'edit/:id', component: EditCorridaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
