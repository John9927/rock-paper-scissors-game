import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('count')) {
      localStorage.setItem('count', '0');
    } else {
      this.gameService.count = localStorage.getItem('count');
    }
  }

  onResetCount() {
    this.gameService.count = this.gameService.count = 0;
    localStorage.setItem('count', this.gameService.count);
  }
}
