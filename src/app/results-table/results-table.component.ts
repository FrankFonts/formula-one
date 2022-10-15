import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result, results } from '../results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss'],
})
export class ResultsTableComponent implements OnInit {
  results: Array<Result> = results;

  @Input() selectedIndex: number = -1;
  @Output() customSelectionEvent = new EventEmitter<number>();

  changeSelectedIndex(index: number) {
    console.log(`Selected index at results-table component: ` + index);
    this.customSelectionEvent.emit(index);
  }

  constructor() {}

  ngOnInit(): void {}
}
