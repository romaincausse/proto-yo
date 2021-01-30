import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serie} from '../../models/serie';
import {Subscription} from 'rxjs';
import {SerieService} from '../../services/serie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-serie-liste',
  templateUrl: './serie-liste.component.html',
  styleUrls: ['./serie-liste.component.scss']
})
export class SerieListeComponent implements OnInit, OnDestroy {

  series: Serie[];
  seriesSubscription: Subscription;

  constructor(private router: Router, private serieService: SerieService) {
  }

  ngOnInit() {
    this.seriesSubscription = this.serieService.seriesSubject.subscribe((data: Serie[]) => {
      this.series = data;
    });
    this.serieService.emitSerieSubject();
  }

  onClickSerie(id: number) {
    this.router.navigate(['serie', id]);
  }

  deleteSerie(serie: Serie): void {
    this.serieService.deleteSerie(serie);
  }

  ngOnDestroy(): void {
    this.seriesSubscription.unsubscribe();
  }
}
