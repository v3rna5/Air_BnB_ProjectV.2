import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Property } from '../property.model';
import { PropertyService } from '../property.service';
import { FirebaseObjectObservable } from 'angularfire2/database';




@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  providers: [PropertyService]
})
export class PropertyDetailComponent implements OnInit {
  propertyId: string;
  propertyToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private propertyService: PropertyService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.propertyId = urlParameters['id'];
   });
   this.propertyToDisplay = this.propertyService.getPropertyById(this.propertyId);
  }
}
