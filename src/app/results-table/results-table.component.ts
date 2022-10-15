import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss'],
})
export class ResultsTableComponent implements OnInit {
  @Input() results: Array<Result> = [];
  @Input() selectedIndex: number | undefined;
  @Output() selectedIndexChange = new EventEmitter<number>();

  changeSelectedIndex(index: number) {
    console.log(`Selected index at results-table component: ` + index);
    this.selectedIndexChange.emit(index);
  }

  constructor() {}

  ngOnInit(): void {}
}
