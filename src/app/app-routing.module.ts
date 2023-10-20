import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCorridaComponent } from './form-corrida/form-corrida.component';

const routes: Routes = [
  { path: 'corrida', component: FormCorridaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
