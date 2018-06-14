import { Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { Router } from '@angular/router';
import { PropertyService } from '../property.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  providers: [PropertyService]
})

export class PropertyListComponent implements OnInit {
  properties: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private propertyService: PropertyService){}

  ngOnInit(){
    this.properties = this.propertyService.getProperties();
  }

  goToDetailPage(clickedProperty) {
    this.router.navigate(['properties', clickedProperty.$key]);

  };
}





// import { Property } from '../models/property.model';
// import { Component, Input, Output, EventEmitter } from '@angular/core';
//
//
// @Component({
//   selector: 'app-property-list',
//   templateUrl: './property-list.component.html',
//   styleUrls: ['./property-list.component.css']
// })
//
// export class PropertyListComponent {
//   @Input() childPropertyList: Property[];
//   @Output() clickSender = new EventEmitter();
//
//   editButtonClicked(propertyToEdit: Property) {
//     this.clickSender.emit(propertyToEdit);
//   }
//   properties: Property[] = [
//     // new Property('Viceory Tower 2', '35')
//
//   ];
//
//   priceColor(currentProperty){
//     // if (currentProperty.price === 35){
//     //   return "bg-danger";
//     // } else if (currentProperty.price === 45) {
//     //   return  "bg-warning";
//     // } else {
//       return "bg-info";
//     }
//   // }
//   filterByCompleteness: string = "inactiveProperties";
//
//   onChange(optionFromMenu) {
//   this.filterByCompleteness = optionFromMenu;
// }
// toggleDone(clickedProperty: Property, setCompleteness: boolean) {
//      clickedProperty.done = setCompleteness;
//    }
// }
