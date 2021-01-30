import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Serie} from '../../models/serie';
import {NgForm} from '@angular/forms';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.scss']
})
export class SerieEditComponent implements OnInit {

  editMode: 'edit'|'create';

  serieId: number;

  serie: Serie;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private serieService: SerieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.editMode = 'edit';
        this.serieId = parseInt(params.id, 10);
        this.serieService.getSerieById(this.serieId).subscribe((serie) => {
          this.serie = serie;
        });
      } else {
        this.editMode = 'create';
        this.serie = new Serie();
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.editMode === 'edit') {
        this.serieService.editSerie(form.value);
      } else {
        this.serieService.addSerie(form.value);
      }
      this.route.navigate(['/']);
    }
  }

}
