import { Component } from '@angular/core';
import { Result, results } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  results: Array<Result> = results;
  selectedIndex: number | undefined;

  changeSelectedIndex(index: number) {
    this.selectedIndex = index;

    console.log(`Selected index at app component: ` + index);
  }
}
