import { Component, inject } from '@angular/core';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected todosService = inject(TodoService);
  protected text = '';

  changeText(event: string): void {
    // event.preventDefault();
    // const target = event.target as HTMLInputElement;
    this.text = event;
  }

  addTodo() {
    this.todosService.addTodo(this.text);
    this.text = '';
  }
}
