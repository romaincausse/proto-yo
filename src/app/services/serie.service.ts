import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Serie} from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  seriesSubject = new Subject<Serie[]>();

  private series: Serie[];

  constructor() {
    this.series = [{
      id: 1,
      name: 'abc',
      review: 'la revue',
      seasonsNumber: 10,
      photo: '',
      description: 'description 1',
      firstReleaseDate: '10/01/2014'
    },
      {
        id: 2,
        name: 'def',
        review: 'une autre revue',
        seasonsNumber: 4,
        photo: '',
        description: 'description 3',
        firstReleaseDate: '10/01/2016'
      }
    ];
  }

  emitSerieSubject(): void {
    this.seriesSubject.next(this.series.slice());
  }
}
