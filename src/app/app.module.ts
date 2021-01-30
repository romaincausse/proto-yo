import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListeComponent } from './components/serie-liste/serie-liste.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { SerieEditComponent } from './components/serie-edit/serie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListeComponent,
    PageNotFoundComponentComponent,
    SerieViewComponent,
    SerieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
