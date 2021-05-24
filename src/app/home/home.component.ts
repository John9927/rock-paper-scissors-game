import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  results: any;
  win = false;
  lose = false;
  draw = false;
  timeout = false;

  ngOnInit(): void { }

  onClickSasso() {
    let random = this.getRandomNumber(3);
    this.timeout = true;

    if (random == 0) {
      setTimeout(() => {
        this.results = "Forbice";
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;
      }, 3000)
    } else if (random == 1) {
      setTimeout(() => {
        this.results = "Carta"
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;
      }, 3000)
    } else if (random == 2) {
      setTimeout(() => {
        this.results = "Sasso";
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;
      }, 3000)
    }
  }

  onClickCarta() {
    let random = this.getRandomNumber(3);
    this.timeout = true;

    if (random == 0) {
      setTimeout(() =>  {
        this.results = "Forbice";
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;
      }, 3000)
    } else if (random == 1) {
      setTimeout(() => {
        this.results = "Carta";
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;
      }, 3000)
    } else if (random == 2) {
      setTimeout(() => {
        this.results = "Sasso";
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;
      }, 3000)
    }
  }

  onClickForbice() {
    let random = this.getRandomNumber(3);
    this.timeout = true;

    if (random == 0) {
      setTimeout(() => {
        this.results = "Forbice";
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;
      }, 3000)
    } else if (random == 1) {
      setTimeout(() => {
        this.results = "Carta";
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;
      }, 3000)
    } else if (random == 2) {
      setTimeout(() => {
        this.results = "Sasso";
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;
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
