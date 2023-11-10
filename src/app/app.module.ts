import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TituloPaginaComponent } from './shared/titulo-pagina/titulo-pagina.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormCorridaComponent } from './form-corrida/form-corrida.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ListaCorridasComponent } from './lista-corridas/lista-corridas.component';
import { EditCorridaComponent } from './components/edit-corrida/edit-corrida.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TotalCorridasComponent } from './lista-corridas/total-corridas/total-corridas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TituloPaginaComponent,
    HeaderComponent,
    FooterComponent,
    FormCorridaComponent,
    EditCorridaComponent,
    ListaCorridasComponent,
    TotalCorridasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DataTableComponent,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
//    ListaCorridasComponent,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
