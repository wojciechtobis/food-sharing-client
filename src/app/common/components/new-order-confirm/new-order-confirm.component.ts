import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order-confirm',
  templateUrl: './new-order-confirm.component.html',
  styleUrls: ['./new-order-confirm.component.css']
})
export class NewOrderConfirmComponent implements OnInit {

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
