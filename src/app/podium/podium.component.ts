import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Result, results } from '../results';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss'],
})
export class PodiumComponent implements OnInit {
  results: Array<Result> = results;

  @Input() selectedIndex: number = -1;
  @Output() customSelectionEvent = new EventEmitter<number>();

  changeSelectedIndex(index: number) {
    console.log(`Selected index at podium component: ` + index);
    this.customSelectionEvent.emit(index);
  }

  constructor() {}

  ngOnInit(): void {}
}
