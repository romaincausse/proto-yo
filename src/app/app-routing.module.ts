import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SerieListeComponent} from './components/serie-liste/serie-liste.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SerieViewComponent} from './components/serie-view/serie-view.component';
import {SerieEditComponent} from './components/serie-edit/serie-edit.component';


const routes: Routes = [
  {path: '', component: SerieListeComponent},
  {path: 'serie/:id', component: SerieViewComponent},
  {path: 'serie/create', component: SerieEditComponent},
  {path: 'serie/edit/:id', component: SerieEditComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
