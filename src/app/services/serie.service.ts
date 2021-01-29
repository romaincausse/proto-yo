import { Injectable } from '@angular/core';
import {seriesData} from '../data/series';
import {Subject} from 'rxjs';
import {Serie} from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  seriesSubject = new Subject<Serie[]>();

  private series = seriesData;

  constructor() { }

  emitAppareilSubject(): void {
    this.seriesSubject.next(this.series.slice());
  }
}
