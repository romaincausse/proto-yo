import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {SerieEditComponent} from './components/serie-edit/serie-edit.component';
import {SerieListeComponent} from './components/serie-liste/serie-liste.component';
import {SerieViewComponent} from './components/serie-view/serie-view.component';
import {SignInComponentComponent} from './components/sign-in-component/sign-in-component.component';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: SerieListeComponent},
  {path: 'serie/create', canActivate: [AuthGuardService], component: SerieEditComponent},
  {path: 'serie/:id', canActivate: [AuthGuardService], component: SerieViewComponent},
  {path: 'serie/edit/:id', canActivate: [AuthGuardService], component: SerieEditComponent},
  {path: 'auth/signin', component: SignInComponentComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
