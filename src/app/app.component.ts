import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: DataSource;
  collapsed = false;
  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };
  customizeTooltip = (pointsInfo) => {
    return { text: parseInt(pointsInfo.originalValue) + '%' };
  };

  constructor(service: AppService) {
    this.dataSource = service.getDataSource();
  }
}
