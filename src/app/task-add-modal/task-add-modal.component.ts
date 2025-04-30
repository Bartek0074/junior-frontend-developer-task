import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-task-add-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add-modal.component.html',
  styleUrls: ['./task-add-modal.component.scss'],
})
export class TaskAddModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
    name: string;
    date: string;
    description: string;
    status: TaskStatus;
  }>();

  name: string = '';
  date: string = '';
  description: string = '';
  status: TaskStatus = TaskStatus.Planned;

  TaskStatus = TaskStatus;

  onSubmit() {
    if (this.name && this.date) {
      this.add.emit({
        name: this.name,
        date: this.date,
        description: this.description,
        status: TaskStatus.Planned,
      });
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}
