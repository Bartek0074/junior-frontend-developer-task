import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss',
})
export class TaskFilterComponent {
  @Output() nameChange = new EventEmitter<string>();
  @Output() dateChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<TaskStatus | ''>();

  TaskStatus = TaskStatus;

  name: string = '';
  date: string = '';
  status: TaskStatus | '' = '';

  onNameInput() {
    this.nameChange.emit(this.name);
  }

  onDateChange() {
    this.dateChange.emit(this.date);
  }

  onStatusChange() {
    this.statusChange.emit(this.status);
  }
}
