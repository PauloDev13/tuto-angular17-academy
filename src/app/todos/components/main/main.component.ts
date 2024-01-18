import { Component, computed, inject } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  protected todosService = inject(TodoService);
  protected todoList = this.todosService.todosSig;

  protected visibleTodos = computed(() => {
    const filter = this.todosService.filterSig;

    switch (filter()) {
      case FilterEnum.ativa:
        return this.todoList().filter(todo => !todo.isCompleted);
      case FilterEnum.encerrada:
        return this.todoList().filter(todo => todo.isCompleted);
      default:
        return this.todoList();
    }
  });
}
