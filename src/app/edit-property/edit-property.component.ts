// import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/property.model';


@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
// export class EditTaskComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
export class EditPropertyComponent {
  @Input() childSelectedProperty: Property;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
     this.clickedDone.emit();
   }
 }
