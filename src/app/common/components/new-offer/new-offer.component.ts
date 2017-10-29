import { NewOfferService } from '../../services/new-offer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  constructor(private newOfferService: NewOfferService, private router: Router) { }

  title: FormControl;
  location: FormControl;
  availaibility: FormControl;
  itemName: FormControl;
  itemDate: FormControl;
  email: FormControl;
  phone: FormControl;

  items: {name: String, date: String}[];
  availabilities: string[];

  ngOnInit() {
    this.title = new FormControl();
    this.location = new FormControl();
    this.availaibility = new FormControl();
    this.itemName = new FormControl();
    this.itemDate = new FormControl();
    this.email = new FormControl();
    this.phone = new FormControl();

    this.availabilities = [];
    this.items = [];
  }

  public send() {
    console.log('clicked send');
    const newOffer = {
      address: this.location.value,
      receiveTimes: this.availabilities,
      isForFoundationOnly: false,
      offerDescription: this.title.value,
      ownerName: 1,
      ownerEmail: this.email.value,
      productIds: ['69311a62-7446-46b8-be79-a8a8534c56d8']
    };
    let respGuid;
    this.newOfferService.postNewOffer(newOffer)
      .subscribe(res => {
        respGuid = res;
        if (respGuid.length === 36) {
            this.router.navigate(['/new-offer-confirm']);
          }
      });
  }

  public addItem() {
    const newItemName = this.itemName.value;
    const newItemDate = this.itemDate.value;
    const newItem = {name: newItemName, date: newItemDate};
    this.items.push(newItem);
  }

  public addAvailability() {
    const newAvailability = this.availaibility.value;
    this.availabilities.push(newAvailability);
  }

}
