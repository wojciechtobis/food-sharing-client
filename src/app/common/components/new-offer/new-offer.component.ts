import {NewOfferService} from '../../services/new-offer.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  constructor(private newOfferService: NewOfferService, private router: Router) {}

  title: FormControl;
  location: FormControl;
  availaibility: FormControl;
  itemName: FormControl;
  itemDate: FormControl;
  email: FormControl;
  userName: FormControl;
  foundationsOnly: FormControl;

  products: {name: String, expirationDate: String}[];
  availabilities: string[];

  ngOnInit() {
    this.title = new FormControl();
    this.location = new FormControl();
    this.availaibility = new FormControl();
    this.itemName = new FormControl();
    this.itemDate = new FormControl();
    this.email = new FormControl();
    this.userName = new FormControl();
    this.foundationsOnly = new FormControl();

    this.availabilities = [];
    this.products = [];
  }

  public send() {
    const newOffer = {
      address: this.location.value,
      receiveTimes: this.availabilities,
      isForFoundationOnly: this.foundationsOnly.value == null || this.foundationsOnly.value === undefined
        ? false : this.foundationsOnly.value,
      offerDescription: this.title.value,
      ownerName: this.userName.value,
      ownerEmail: this.email.value,
      products: this.products
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
    console.log('clicked add');
    if (newItemName && newItemDate && this.products.filter(v => v.expirationDate === newItemDate && v.name === newItemName).length === 0) {
      this.products.push({name: newItemName, expirationDate: newItemDate});
    }
    this.itemName.setValue('');
    this.itemDate.setValue('');
  }

  public addAvailability() {
    const newAvailability = this.availaibility.value;

    if (newAvailability && this.availabilities.filter(v => v === newAvailability).length === 0) {
      this.availabilities.push(newAvailability);
    }
    this.availaibility.setValue('');
  }

  public deleteAvailability(avail: string) {
    this.availabilities = this.availabilities.filter(v => v !== avail);
  }

  public deleteItem(item) {
    this.products = this.products.filter(v => v.name !== item.name || v.expirationDate !== item.expirationDate);
  }
}
