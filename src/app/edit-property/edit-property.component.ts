// import { Component, Input, Output, EventEmitter } from '@angular/core';
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
