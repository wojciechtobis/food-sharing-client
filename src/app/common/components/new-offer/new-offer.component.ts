import { NewOfferService } from '../../services/new-offer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  constructor(private newOfferService: NewOfferService) { }

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
      receiveTime: this.availaibility,
      isForFoundationOnly: false,
      offerDescription: this.title.value,
      ownerId: 1,
      productsId: []
    };
    this.newOfferService.postNewOffer(newOffer);
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
