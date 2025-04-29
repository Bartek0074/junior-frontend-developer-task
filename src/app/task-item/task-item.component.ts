import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: { name: string; status: string; date: string; description: string };
  @Output() toggle = new EventEmitter<void>();

  descVisible: boolean = false;

  toggleCompleted() {
    this.toggle.emit();
  }

  toggleDescription() {
    this.descVisible = !this.descVisible;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Planned':
        return 'info';
      default:
        return 'secondary';
    }
  }
  
}
