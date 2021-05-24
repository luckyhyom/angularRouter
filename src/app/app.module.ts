import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'crisis-list',component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path:'**',component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
