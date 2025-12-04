import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  public getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
