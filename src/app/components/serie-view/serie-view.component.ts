import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Serie} from '../../models/serie';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-serie-view',
  templateUrl: './serie-view.component.html',
  styleUrls: ['./serie-view.component.scss']
})
export class SerieViewComponent implements OnInit {

  serieId: number;
  serie: Serie;

  constructor(private serieService: SerieService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe((params) => {
       this.serieId = parseInt(params.id, 10);
       this.serieService.getSerieById(this.serieId).subscribe((serie) => {
         if (serie) {
           this.serie = serie;
         } else {
           this.route.navigate(['page']);
         }
       });
    });
  }

}
