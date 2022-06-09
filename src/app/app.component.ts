import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';

@Component({
  selector: 'my-app',
  template: `
        <kendo-scheduler [kendoSchedulerBinding]="events" [selectedDate]="selectedDate" >
            <kendo-scheduler-month-view> </kendo-scheduler-month-view>
        </kendo-scheduler>
    `,
})
export class AppComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
