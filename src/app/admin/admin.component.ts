import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PropertyService]
})
export class AdminComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  submitForm(condo: string, address: string, amenities: string, price: string) {
    var newProperty: Property = new Property(condo, address, amenities, price);
    this.propertyService.addProperty(newProperty);
  }

}
