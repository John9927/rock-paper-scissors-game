import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  initial = true;
  bot = false;

  responseSasso = false;
  responseCarta = false;
  responseForbice = false;

  sasso = false;
  carta = false;
  forbice = false;

  win = false;
  lose = false;
  draw = false;

  timeout = false;

  count = 0;

  rules = false;

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  onClickRock() {
    let random = this.getRandomNumber(3);
    this.timeout = true;
    this.initial = false;
    this.bot = true;

    this.responseSasso = true;
    this.responseCarta = false;
    this.responseForbice = false;

    if (random == 0) {
      setTimeout(() => {
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;
        this.count += 10;
        // Se il numero random è 0 uscirà Forbice
        this.sasso = false;
        this.carta = false;
        this.forbice = true;
      }, 1500)
    } else if (random == 1) {
      setTimeout(() => {
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;

        if (this.count == 0)
          this.count;
        else
          this.count -= 5;

        // Se il numero random è 1 uscirà Carta
        this.sasso = false;
        this.carta = true;
        this.forbice = false;
      }, 1500)
    } else if (random == 2) {
      setTimeout(() => {
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;

        if (this.count == 0)
          this.count;
        else
          this.count -= 5;

        // Se il numero random è 2 uscirà Sasso
        this.sasso = true;
        this.carta = false;
        this.forbice = false;
      }, 1500)
    }
  }


  onClickPaper() {
    let random = this.getRandomNumber(3);
    this.initial = false;
    this.bot = true;
    this.timeout = true;

    this.responseSasso = false;
    this.responseCarta = true;
    this.responseForbice = false;

    if (random == 0) {
      setTimeout(() => {
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;

        if (this.count == 0)
          this.count;
        else
          this.count -= 5;

        this.sasso = false;
        this.carta = false;
        this.forbice = true;
      }, 1500)
    } else if (random == 1) {
      setTimeout(() => {
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;

        if (this.count == 0)
          this.count;
        else
          this.count -= 5;

        this.sasso = false;
        this.carta = true;
        this.forbice = false;
      }, 1500)
    } else if (random == 2) {
      setTimeout(() => {
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;
        this.count += 10;
        this.sasso = true;
        this.carta = false;
        this.forbice = false;
      }, 1500)
    }
  }


  onClickScissors() {
    let random = this.getRandomNumber(3);
    this.timeout = true;
    this.initial = false;
    this.bot = true;

    this.responseSasso = false;
    this.responseCarta = false;
    this.responseForbice = true;

    if (random == 0) {
      setTimeout(() => {
        this.win = false;
        this.lose = false;
        this.draw = true;
        this.timeout = false;

        if (this.count == 0)
          this.count;
        else
          this.count -= 5;

        this.sasso = false;
        this.carta = false;
        this.forbice = true;
      }, 1500)
    } else if (random == 1) {
      setTimeout(() => {
        this.win = true;
        this.lose = false;
        this.draw = false;
        this.timeout = false;
        this.count += 10;

        this.sasso = false;
        this.carta = true;
        this.forbice = false;
      }, 1500)
    } else if (random == 2) {
      setTimeout(() => {
        this.win = false;
        this.lose = true;
        this.draw = false;
        this.timeout = false;

        if (this.count == 0)
          this.count;
        else
          this.count -= 5;

        this.sasso = true;
        this.carta = false;
        this.forbice = false;
      }, 1500)
    }
  }

  onClickRiprova() {
    this.initial = true;
    this.bot = false;
    this.timeout = true;
  }
}
