import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offer-confirm',
  templateUrl: './new-offer-confirm.component.html',
  styleUrls: ['./new-offer-confirm.component.css']
})
export class NewOfferConfirmComponent implements OnInit {

  constructor(private router: Router) {
    this.doAsyncTask();
  }

  ngOnInit() {
  }

  public backToMain() {
    this.router.navigate(['/home']);
  }

  public doAsyncTask() {
    setTimeout(() => {
      this.backToMain();
    }, 10000);
   }
}
