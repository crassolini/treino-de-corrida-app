import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CorridaPromiseService {
  URL = 'http://localhost:3000/corridas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  async getAll(): Promise<Corrida[]> {
    const res = this.httpClient.get<Corrida[]>(`${this.URL}`);
    return await firstValueFrom(res);
  }

  async getById(id: string): Promise<Corrida[]> {
    const res = this.httpClient.get<Corrida[]>(`${this.URL}/${id}`);
    return await firstValueFrom(res);
  }

  async save(corrida: Corrida): Promise<Corrida> {
    const res = this.httpClient.post<Corrida>(this.URL, JSON.stringify(corrida), this.httpOptions);
    return await firstValueFrom(res);
  }

  async patch(corrida: Corrida): Promise<Corrida> {
    const res = this.httpClient.patch<Corrida>(`${this.URL}/${corrida.id}`, JSON.stringify(corrida), this.httpOptions);
    return await firstValueFrom(res);
  }

  async update(corrida: Corrida): Promise<Corrida> {
    const res = this.httpClient.put<Corrida>(`${this.URL}/${corrida.id}`, JSON.stringify(corrida), this.httpOptions);
    return await firstValueFrom(res);
  }
}
