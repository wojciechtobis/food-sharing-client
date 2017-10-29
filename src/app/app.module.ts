import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicService } from './common/services/basic.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './common/components/home/home.component';
import { NewOfferConfirmComponent } from './common/components/new-offer-confirm/new-offer-confirm.component';
import { HomeService } from './common/services/home.service';
import { Routes, RouterModule } from '@angular/router';
import { NewOfferComponent } from './common/components/new-offer/new-offer.component';
import { NewOfferService } from './common/services/new-offer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './common/components/offer/offer.component';
import {MatCardModule} from '@angular/material';
import { NewOrderConfirmComponent } from './common/components/new-order-confirm/new-order-confirm.component';
import { OfferService } from './common/services/offer.service';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'new-offer', component: NewOfferComponent },
  { path: 'new-offer-confirm', component: NewOfferConfirmComponent},
  { path: 'offer', component: OfferComponent},
  { path: 'new-order-confirm', component: NewOrderConfirmComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewOfferComponent,
    OfferComponent,
    NewOfferConfirmComponent,
    NewOrderConfirmComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    BasicService,
    HomeService,
    NewOfferService,
    OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
