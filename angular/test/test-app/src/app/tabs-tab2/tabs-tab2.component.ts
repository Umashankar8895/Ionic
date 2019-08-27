import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-tabs-tab2',
  templateUrl: './tabs-tab2.component.html',
})
export class TabsTab2Component {
  title = 'ERROR';

  ngOnInit() {
    NgZone.assertInAngularZone();
    setTimeout(() => {
      NgZone.assertInAngularZone();
      this.title = 'Tab 2 - Page 1';
    });
  }
}
