// import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
// import { Component, Input } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}
toggleDone(clickedTask: Task, setCompleteness: boolean) {
     clickedTask.done = setCompleteness;
   }
}
