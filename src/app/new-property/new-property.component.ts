import { Component, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})

export class NewPropertyComponent {
  @Output() sendProperty = new EventEmitter();

  submitForm(description: string, address: string, amenities: string, priority: string) {
    let newProperty: Property = new Property(description, address, amenities, parseInt(priority));
    this.sendProperty.emit(newProperty);
  }
}
