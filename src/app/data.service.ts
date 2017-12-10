import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  gold: number = 0;

  constructor() { }

  retrieveGold() {
    return this.gold;
  }

  generateGold(value: number){
    this.gold += value;
    
  }
}
