export enum TaskStatus {
  Completed = 'Completed',
  Pending = 'Pending',
  Planned = 'Planned',
}

export interface Task {
  name: string;
  status: TaskStatus;
  date: string;
  description: string;
}
