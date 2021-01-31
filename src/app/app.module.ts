import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SerieListeComponent} from './components/serie-liste/serie-liste.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SerieViewComponent} from './components/serie-view/serie-view.component';
import {SerieEditComponent} from './components/serie-edit/serie-edit.component';
import {CommentListComponent} from './components/comment-list/comment-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentCreateComponent} from './components/comment-create/comment-create.component';
import { SignInComponentComponent } from './components/sign-in-component/sign-in-component.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListeComponent,
    PageNotFoundComponent,
    SerieViewComponent,
    SerieEditComponent,
    CommentListComponent,
    CommentCreateComponent,
    SignInComponentComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
