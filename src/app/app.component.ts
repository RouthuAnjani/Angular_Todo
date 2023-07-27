import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  providers:[TodoService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
