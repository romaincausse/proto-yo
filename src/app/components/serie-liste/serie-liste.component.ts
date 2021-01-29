import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serie} from '../../models/serie';
import {Subscription} from 'rxjs';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-serie-liste',
  templateUrl: './serie-liste.component.html',
  styleUrls: ['./serie-liste.component.scss']
})
export class SerieListeComponent implements OnInit, OnDestroy {

  series: Serie[];
  seriesSubscription: Subscription;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.seriesSubscription = this.serieService.seriesSubject.subscribe((data: Serie[]) => {
      this.series = data;
    });
    this.serieService.emitAppareilSubject();
  }

  ngOnDestroy(): void {
    this.seriesSubscription.unsubscribe();
  }
}
