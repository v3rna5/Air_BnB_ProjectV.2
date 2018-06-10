import { Component } from '@angular/core';
import { Property } from './models/property.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedProperty = null;

  masterPropertyList: Property[] = [
    new Property('Viceroy Property', 35),

  ];

  editProperty(clickedProperty) {
    this.selectedProperty = clickedProperty;
  }

  finishedEditing() {
    this.selectedProperty = null;
  }
  addProperty(newProperty: Property) {
    this.masterPropertyList.push(newProperty);
  }
}
