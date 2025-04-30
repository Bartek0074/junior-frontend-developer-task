import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskAddModalComponent } from './task-add-modal/task-add-modal.component';
import { Task, TaskStatus } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskItemComponent,
    TaskFilterComponent,
    TaskAddModalComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'junior-frontend-developer-task';

  protected tasks: Task[] = [
    {
      name: 'Zrobić zakupy spożywcze',
      status: TaskStatus.Completed,
      date: '2025-05-01',
      description: 'Muszę kupić mleko, mąkę i jajka.',
    },
    {
      name: 'Opłacić rachunki',
      status: TaskStatus.Pending,
      date: '2025-05-10',
      description: 'Tylko nie odkładaj tego na inny dzień!',
    },
    {
      name: 'Urodziny mamy',
      status: TaskStatus.Planned,
      date: '2025-05-15',
      description: 'Kupić kwiaty i tort.',
    },
  ];

  filterName: string = '';
  filterDate: string = '';
  filterStatus: TaskStatus | '' = '';

  showModal: boolean = false;

  get filteredTasks(): Task[] {
    return this.tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        (!this.filterDate || task.date === this.filterDate) &&
        (!this.filterStatus || task.status === this.filterStatus)
    );
  }

  toggleCompleted(task: Task) {
    task.status =
      task.status === TaskStatus.Completed
        ? TaskStatus.Planned
        : TaskStatus.Completed;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addTask(task: {
    name: string;
    date: string;
    description: string;
    status: TaskStatus;
  }) {
    this.tasks.push(task);
  }
}
