import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  gold: number = 0;
  comments: string[] = [];

  @Output() myEvent = new EventEmitter();


  callParent(event) {
    this.myEvent.emit(this._dataService.retrieveGold());
  }
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.gold = this._dataService.retrieveGold();

  }

  farmGold(event) {
    event.preventDefault();
    let goldGenerator = Math.floor((Math.random() * 10) + 1)
    this._dataService.generateGold(goldGenerator)
    this.gold = this._dataService.retrieveGold()
    this.comments.push("You have eared " + goldGenerator + 'gold at Farm. \n');
    console.log(this.comments)
  }
  caveGold(event) {
    event.preventDefault();
    let goldGenerator = Math.floor((Math.random() * 10) + 1)
    this._dataService.generateGold(goldGenerator)
    this.gold = this._dataService.retrieveGold()
    this.comments.push("You have eared " + goldGenerator + 'gold at Cave. \n');
  }
  casinoGold(event) {
    event.preventDefault();
    let goldGenerator = Math.floor((Math.random() * 10) + 1)
    this._dataService.generateGold(goldGenerator)
    this.gold = this._dataService.retrieveGold()
    this.comments.push("You have eared " + goldGenerator + 'gold at Casino. \n');
  }
  houseGold(event) {
    event.preventDefault();
    let goldGenerator = Math.floor((Math.random() * 10) + 1)
    this._dataService.generateGold(goldGenerator)
    this.gold = this._dataService.retrieveGold()
    this.comments.push("You have eared " + goldGenerator + 'gold at House. \n');
  }

}