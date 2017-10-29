import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicService } from './common/services/basic.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './common/components/home/home.component';
import { HomeService } from './common/services/home.service';
import { Routes, RouterModule } from '@angular/router';
import { NewOfferComponent } from './common/components/new-offer/new-offer.component';
import { NewOfferService } from './common/services/new-offer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './common/components/offer/offer.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'new-offer', component: NewOfferComponent },
  { path: 'new-offer-confirm', component: NewOfferConfirmComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewOfferComponent,
    OfferComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    BasicService,
    HomeService,
    NewOfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
