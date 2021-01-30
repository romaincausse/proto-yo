import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListeComponent } from './components/serie-liste/serie-liste.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { SerieEditComponent } from './components/serie-edit/serie-edit.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListeComponent,
    PageNotFoundComponentComponent,
    SerieViewComponent,
    SerieEditComponent,
    CommentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
