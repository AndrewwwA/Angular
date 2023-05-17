import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/TaskInterface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() newAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit(): void {
    if (!this.text) {
      alert('Please Add a task');
      return;
    } else {
      const newTask: Task = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.newAddTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
