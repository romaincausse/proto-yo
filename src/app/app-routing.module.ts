import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SerieListeComponent} from './components/serie-liste/serie-liste.component';
import {PageNotFoundComponentComponent} from './components/page-not-found-component/page-not-found-component.component';


const routes: Routes = [
  {path: '', component: SerieListeComponent},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
