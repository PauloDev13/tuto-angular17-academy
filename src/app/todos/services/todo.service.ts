import { Injectable, signal } from '@angular/core';

import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.todas);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    };

    this.todosSig.update(todos => [...todos, newTodo]);
  }

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }
}
