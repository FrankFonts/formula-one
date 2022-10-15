import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedIndex: number = -1;

  changeSelectedIndex(index: number) {
    this.selectedIndex = index;

    console.log(`Selected index at app component: ` + index);
  }
}
