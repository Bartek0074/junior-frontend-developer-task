import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-task-add-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-add-modal.component.html',
  styleUrls: ['./task-add-modal.component.scss'],
})
export class TaskAddModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<Task>();

  taskForm: FormGroup;
  submitted = false;
  TaskStatus = TaskStatus;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', [Validators.required, TaskAddModalComponent.futureDateValidator]],
      description: [''],
    });
  }

  static futureDateValidator(control: any) {
    const input = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return input < today ? { dateInvalid: true } : null;
  }

  get nameControl() {
    return this.taskForm.get('name');
  }

  get dateControl() {
    return this.taskForm.get('date');
  }

  onSubmit() {
    this.submitted = true;
    if (this.taskForm.valid) {
      const { name, date, description } = this.taskForm.value;
      this.add.emit({ name, date, description, status: TaskStatus.Planned });
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}
