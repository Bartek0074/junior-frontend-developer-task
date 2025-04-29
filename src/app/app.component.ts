import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { Task, TaskStatus } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [TaskItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
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

  protected descVisible: boolean = false;

  toggleCompleted(task: Task) {
    task.status =
      task.status === TaskStatus.Completed
        ? TaskStatus.Planned
        : TaskStatus.Completed;
  }
}
