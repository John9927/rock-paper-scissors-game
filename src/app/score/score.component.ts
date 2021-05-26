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
    this.gameService.count = localStorage.getItem('count');
  }
}
