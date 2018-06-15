import { Injectable } from '@angular/core';
import { Property } from './property.model';
import { PROPERTIES } from './mock-properties';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PropertyService {
  properties: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.properties = database.list('properties');
  }

  getProperties() {
    return this.properties;
  }

  addProperty(newProperty: Property) {
    this.properties.push(newProperty);
  }

  getPropertyById(propertyId: string){
    return this.database.object('properties/' + propertyId);
  }

  updateProperty(localUpdatedProperty){
    var propertyEntryInFirebase = this.getPropertyById(localUpdatedProperty.$key);
    propertyEntryInFirebase.update({condo: localUpdatedProperty.condo,
      address: localUpdatedProperty.address,
      amenities: localUpdatedProperty.amenities});
    }

    deleteProperty(localPropertyToDelete){
      var propertyEntryInFirebase = this.getPropertyById(localPropertyToDelete.$key);
      propertyEntryInFirebase.remove();
    }
  }
