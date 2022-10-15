import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss'],
})
export class PodiumComponent implements OnInit {
  @Input() drivers: Array<string> = [];
  @Output() hidePodiumEvent = new EventEmitter();

  hidePodium() {
    console.log('Hide podium');
    this.hidePodiumEvent.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
