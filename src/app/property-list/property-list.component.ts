import { Property } from '../models/property.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent {
  @Input() childPropertyList: Property[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(propertyToEdit: Property) {
    this.clickSender.emit(propertyToEdit);
  }
  properties: Property[] = [
    new Property('Finish weekend Angular homework for Epicodus course', 'address', 'amenties', 3),
    // new Property('Begin brainstorming possible JavaScript group projects', 2),
    // new Property('Add README file to last few Angular repos on GitHub', 2)
  ];

  priorityColor(currentProperty){
    if (currentProperty.priority === 3){
      return "";
    } else if (currentProperty.priority === 2) {
      return  "";
    } else {
      return "";
    }
  }
  filterByCompleteness: string = "incompleteProperties";

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}
toggleDone(clickedProperty: Property, setCompleteness: boolean) {
     clickedProperty.done = setCompleteness;
   }
}
