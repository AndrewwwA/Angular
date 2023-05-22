import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/TaskInterface';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showComp: boolean = false;
  subscription: Subscription;

  @Output() newAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showComp = value));
  }

  ngOnInit(): void {
    // this.showComp = this.uiService.showAddTask
  }

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
