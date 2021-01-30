import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SerieListeComponent} from './components/serie-liste/serie-liste.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SerieViewComponent} from './components/serie-view/serie-view.component';
import {SerieEditComponent} from './components/serie-edit/serie-edit.component';
import {CommentListComponent} from './components/comment-list/comment-list.component';
import {FormsModule} from '@angular/forms';
import {CommentCreateComponent} from './components/comment-create/comment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListeComponent,
    PageNotFoundComponent,
    SerieViewComponent,
    SerieEditComponent,
    CommentListComponent,
    CommentCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
