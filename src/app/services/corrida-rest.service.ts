import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage-util';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorridaRestService {
  URL = "http://localhost:3000/corridas";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Corrida[]> {
    return this.httpClient.get<Corrida[]>(`${this.URL}`);
  }

  getById(id: string): Observable<Corrida> {
    return this.httpClient.get<Corrida>(`${this.URL}/${id}`);
  }

  save(corrida: Corrida): Observable<Corrida> {
    return this.httpClient.post<Corrida>(this.URL, corrida, this.httpOptions);
  }

  patch(corrida: Corrida): Observable<Corrida> {
    return this.httpClient.patch<Corrida>(
      `${this.URL}/${corrida.id}`,
      corrida,
      this.httpOptions
    );
  }

  update(corrida: Corrida): Observable<Corrida> {
    return this.httpClient.put<Corrida>(
      `${this.URL}/${corrida.id}`,
      corrida,
      this.httpOptions
    );
  }

  delete(corrida: Corrida): Observable<Corrida> {
    return this.httpClient.delete<Corrida>(`${this.URL}/${corrida.id}`);
  }
}
