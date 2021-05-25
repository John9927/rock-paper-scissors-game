import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public gameService: GameService) { }
  ngOnInit(): void {
    this.gameService.initial = true;
    this.gameService.bot = false;
  }



  onClickRules() {
    this.gameService.rules = true;
  }
}
