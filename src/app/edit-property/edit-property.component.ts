// import { Component, OnInit } from '@angular/core';
// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Property } from '../models/property.model';
//
//
// @Component({
//   selector: 'app-edit-property',
//   templateUrl: './edit-property.component.html',
//   styleUrls: ['./edit-property.component.css']
// })
// export class EditTaskComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
// export class EditPropertyComponent {
//   @Input() childSelectedProperty: Property;
//   @Output() clickedDone = new EventEmitter();
//
//   finishedEditing() {
//      this.clickedDone.emit();
//    }
//  }

 import { Component, Input, OnInit } from '@angular/core';
 import { PropertyService } from '../property.service';

 @Component({
   selector: 'app-edit-property',
   templateUrl: './edit-property.component.html',
   styleUrls: ['./edit-property.component.css'],
   providers: [PropertyService]
 })

 export class EditPropertyComponent implements OnInit {
   @Input() selectedProperty;

   constructor(private propertyService: PropertyService) { }

   ngOnInit() {
   }

   beginUpdatingProperty(propertyToUpdate){
     this.propertyService.updateProperty(propertyToUpdate);
   }

   beginDeletingProperty(propertyToDelete){
     if(confirm("Are you sure you want to delete this item from the inventory?")){
       this.propertyService.deleteProperty(propertyToDelete);
     }
   }

 }
