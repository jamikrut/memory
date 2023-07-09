import {Component, Input} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FlashCard} from "../../models/flash-card";
import {ActivatedRoute} from "@angular/router";
import {FlashCardService} from "../../services/flash-card.service";

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent {

  word = ""

  flashCards: FlashCard[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let idString = param.get('category-id');

      if (idString) {
        let id = Number.parseInt(idString);

        this.flashCarsService.getCardsForCategory(id).subscribe((flashCards => this.flashCards = flashCards))
      }

    });
  }


  constructor(private activatedRoute: ActivatedRoute, private flashCarsService: FlashCardService) {
  }

  addFlashCard() {

    constructor(private activatedRoute: ActivatedRoute,
  priate f :fla)

  }

  plusIcon = faPlus;
}
