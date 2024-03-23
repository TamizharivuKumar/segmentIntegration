import { Component, OnInit } from '@angular/core';
import { AnalyticsBrowser } from '@segment/analytics-next';
import { environment } from 'src/environments/environment';
export const analytics = AnalyticsBrowser.load({ writeKey: environment.segmentWritekey })

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public firstName: string = '';
  public lastName: string = '';
  user() {
    analytics.track('User Data',
    {
      firstName : this.firstName,
      lastName : this.lastName
    });
  }
}
