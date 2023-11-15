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
import { FooterComponent } from './components/footer/footer.component';
import { FormCorridaComponent } from './form-corrida/form-corrida.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ListaCorridasComponent } from './lista-corridas/lista-corridas.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TotalCorridasComponent } from './lista-corridas/total-corridas/total-corridas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalculoPaceComponent } from './shared/calculo-pace/calculo-pace.component';
import { ResultadoPaceComponent } from './shared/calculo-pace/resultado-pace/resultado-pace.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloPaginaComponent,
    HeaderComponent,
    FooterComponent,
    FormCorridaComponent,
    ListaCorridasComponent,
    TotalCorridasComponent,
    CalculoPaceComponent,
    ResultadoPaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
