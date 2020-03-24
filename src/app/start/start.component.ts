import { Component } from '@angular/core';
import {ChecklistService} from '../checklist.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(protected checklistService: ChecklistService) {}

  start() {
    this.checklistService.setItems({
      key: ChecklistService.START,
      value: true
    });
  }
}
