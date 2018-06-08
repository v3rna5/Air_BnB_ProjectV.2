// import { Component, OnInit } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
// export class NewTaskComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
// export class NewTaskComponent {
//   submitForm(description: string, priority: number) {
//     let newTask: Task = new Task(description, priority);
//   }
// }

export class NewPropertyComponent {
  @Output() sendProperty = new EventEmitter();

  submitForm(description: string, priority: string) {
    let newProperty: Property = new Property(description, parseInt(priority));
    this.sendProperty.emit(newProperty);
  }
}
