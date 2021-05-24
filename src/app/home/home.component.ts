import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  win = false;
  lose = false;
  draw = false;
  timeout = false;

  sasso = false;
  carta = false;
  forbice = false;

  ngOnInit(): void { }

  onClickSasso() {
    let random = this.getRandomNumber(3);
    this.timeout = true;

    if (random == 0) {
      setTimeout(() => {
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;

        this.sasso = false;
        this.carta = false;
        this.forbice = true;
      }, 3000)
    } else if (random == 1) {
      setTimeout(() => {
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;

        this.sasso = false;
        this.carta = true;
        this.forbice = false;
      }, 3000)
    } else if (random == 2) {
      setTimeout(() => {
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;

        this.sasso = true;
        this.carta = false;
        this.forbice = false;
      }, 3000)
    }
  }

  onClickCarta() {
    let random = this.getRandomNumber(3);
    this.timeout = true;

    if (random == 0) {
      setTimeout(() =>  {
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;

        this.sasso = false;
        this.carta = false;
        this.forbice = true;
      }, 3000)
    } else if (random == 1) {
      setTimeout(() => {
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;

        this.sasso = false;
        this.carta = true;
        this.forbice = false;
      }, 3000)
    } else if (random == 2) {
      setTimeout(() => {
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;

        this.sasso = true;
        this.carta = false;
        this.forbice = false;
      }, 3000)
    }
  }

  onClickForbice() {
    let random = this.getRandomNumber(3);
    this.timeout = true;

    if (random == 0) {
      setTimeout(() => {
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;

        this.sasso = false;
        this.carta = false;
        this.forbice = true;
      }, 3000)
    } else if (random == 1) {
      setTimeout(() => {
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;

        this.sasso = false;
        this.carta = true;
        this.forbice = false;
      }, 3000)
    } else if (random == 2) {
      setTimeout(() => {
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;

        this.sasso = true;
        this.carta = false;
        this.forbice = false;
      }, 3000)
    }
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  onClickRiprova() {
    window.location.reload()
  }

}
