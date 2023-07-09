import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {FlashCardService} from "../../services/flash-card.service";
import {FlashCard} from "../../models/flash-card";

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent {
  @Input() word!: string;
  @Input() translation!: string;
  @Output() removeClicked = new EventEmitter<void>();

  trashIcon = faTrash;

}
