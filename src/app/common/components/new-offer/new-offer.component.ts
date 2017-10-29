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
  userName: FormControl;

  items: {name: String, expirationDate: String, id: String}[];
  availabilities: string[];

  ngOnInit() {
    this.title = new FormControl();
    this.location = new FormControl();
    this.availaibility = new FormControl();
    this.itemName = new FormControl();
    this.itemDate = new FormControl();
    this.email = new FormControl();
    this.userName = new FormControl();

    this.availabilities = [];
    this.items = [];
  }

  public send() {
    console.log('clicked send');
    const ids = this.items.map(i => i.id);
    const newOffer = {
      address: this.location.value,
      receiveTimes: this.availabilities,
      isForFoundationOnly: false,
      offerDescription: this.title.value,
      ownerName: this.userName.value,
      ownerEmail: this.email.value,
      productIds: ids
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
    const newItem = {name: newItemName, expirationDate: newItemDate};

    if (newItemName && newItemDate && this.items.filter(v => v.expirationDate === newItemDate && v.name === newItemName).length === 0) {
      let respGuid;
      this.newOfferService.postNewProduct(newItem)
      .subscribe(res => {
        respGuid = res;
        if (respGuid.length === 36) {
          this.items.push({name: newItemName, expirationDate: newItemDate, id: respGuid});
        }
      });
    }
  }

  public addAvailability() {
    const newAvailability = this.availaibility.value;

    if (newAvailability && this.availabilities.filter(v => v === newAvailability).length === 0) {
      this.availabilities.push(newAvailability);
    }
  }

  public deleteAvailability(avail: string) {
    this.availabilities = this.availabilities.filter(v => v !== avail);
  }

  public deleteItem(item) {
    this.items = this.items.filter(v => v.name !== item.name || v.expirationDate !== item.expirationDate);
  }
}
