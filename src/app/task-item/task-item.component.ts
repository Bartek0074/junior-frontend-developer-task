import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Task, TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<void>();

  descVisible: boolean = false;

  toggleCompleted() {
    this.toggle.emit();
  }

  toggleDescription() {
    this.descVisible = !this.descVisible;
  }

  getStatusColor(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.Completed:
        return 'success';
      case TaskStatus.Pending:
        return 'warning';
      case TaskStatus.Planned:
        return 'info';
      default:
        return 'secondary';
    }
  }
}
