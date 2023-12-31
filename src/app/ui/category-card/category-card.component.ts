import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faComments, faPlay, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Output() removeClicked = new EventEmitter<void>();

  trashIcon = faTrash;
  commentsIcon = faComments;
  playIcon = faPlay;

  emitRemove() {
    this.removeClicked.emit();
  }
}
