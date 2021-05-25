import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.gameService.rules = false;
  }

}
