import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable({
  providedIn: 'root'
})
export class CorridaStorageService {
  corridas!: Corrida[];
  private corridaSource!: BehaviorSubject<number>;

  public CORRIDA_KEY = 'corridas';

  constructor() {
    this.corridas = WebStorageUtil.get(this.CORRIDA_KEY);
    let tamanho: number = this.corridas === null ? 0 : this.corridas.length;
    this.corridaSource = new BehaviorSubject<number>(tamanho);
  }

  save(corrida: Corrida) {
    this.corridas = WebStorageUtil.get(this.CORRIDA_KEY);
    this.corridas = this.corridas === null ? new Array() : this.corridas;
    this.corridas.push(corrida);
    WebStorageUtil.set(this.CORRIDA_KEY, this.corridas);
  }

  update(corrida: Corrida) {
    this.corridas = WebStorageUtil.get(this.CORRIDA_KEY);
    this.delete(corrida.id);
    this.save(corrida);
  }

  delete(id: string): boolean {
    this.corridas = WebStorageUtil.get(this.CORRIDA_KEY);
    this.corridas = this.corridas.filter((u) => {
      return u.id?.valueOf() != id?.valueOf();
    });

    WebStorageUtil.set(this.CORRIDA_KEY, this.corridas);
    return true;
  }

  isExist(value: string): boolean {
    this.corridas = WebStorageUtil.get(this.CORRIDA_KEY);

    if (this.corridas === null)
      return false;

    for (let u of this.corridas) {
      if (u.id?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getCorridas(): Corrida[] {
    this.corridas = WebStorageUtil.get(this.CORRIDA_KEY);
    return this.corridas;
  }

  notifyTotalCorridas() {
    this.corridaSource.next(this.getCorridas()?.length);
    // if (this.getUsers()?.length > 1) {
    //   this.corridaSource.complete();
    // }
  }

  asObservable(): Observable<number> {
    return this.corridaSource;
    //return this.corridaSource.asObservable()
  }

}
