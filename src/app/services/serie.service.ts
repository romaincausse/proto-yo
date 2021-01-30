import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Serie} from '../models/serie';
import {findIndex} from 'rxjs/operators';

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
      firstReleaseDate: '2020-02-04'
    },
      {
        id: 2,
        name: 'def',
        review: 'une autre revue',
        seasonsNumber: 4,
        photo: '',
        description: 'description 3',
        firstReleaseDate: '2018-01-01'
      }
    ];
  }

  emitSerieSubject(): void {
    this.seriesSubject.next(this.series.slice());
  }

  getSerieById(id: number): Observable<Serie|null> {
    return of(this.series.find((serie) => serie.id === id) || null);
  }

  addSerie(data: any): void {
    const id = this.getLastId() + 1;
    const serie: Serie = {
      id,
      name: data.name,
      description: data.description,
      firstReleaseDate: data.firstReleaseDate,
      review: data.review,
      seasonsNumber: data.seasonsNumber,
    };
    this.series.push(serie);
    this.emitSerieSubject();
  }

  editSerie(data: any): void {
    const index = this.series.findIndex((s) => {
      return s.id === data.id;
    });
    if (index > -1) {
      const id =  this.series[index].id;
      const serie: Serie = {
        id,
        name: data.name,
        description: data.description,
        firstReleaseDate: data.firstReleaseDate,
        review: data.review,
        seasonsNumber: data.seasonsNumber,
      };
    }
    this.emitSerieSubject();
  }

  deleteSerie(serie: Serie): void {
    const index = this.series.findIndex((s) => {
      return s.id === serie.id;
    });
    if (index > -1) {
      this.series.splice(index, 1);
    }

    //@todo delete commentaires associés

    this.emitSerieSubject();
  }

  getLastId(): number {
    let lastId = 0;
    this.series.forEach((serie) => {
      if (lastId < serie.id) {
        lastId = serie.id;
      }
    });
    return lastId;
  }
}
