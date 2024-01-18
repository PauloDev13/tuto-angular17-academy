import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly todosService = inject(TodoService);
  activeCount = computed(
    () => this.todosService.todosSig().filter(todo => !todo.isCompleted).length
  );
  protected readonly filterSig = this.todosService.filterSig;
  protected readonly filterEnum = FilterEnum;

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
