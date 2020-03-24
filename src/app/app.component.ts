import { Component } from '@angular/core';
import { STEPS } from './steps/steps';
import {Step} from './step/step';
import {ChecklistService} from './checklist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  steps: Step[] = STEPS;

  constructor(protected checklistService: ChecklistService) {}

  shouldShowStart(): boolean {
    return !this.checklistService.hasItems(ChecklistService.START);
  }
  /**
   * Whether we should show the checklist
   *
   * The checklist should only be shown if the last step is completed (Informs subject)
   */
  shouldShowChecklist(): boolean {

    return this.checklistService.hasItems(ChecklistService.ANNUAL_REPORT_YES, ChecklistService.ANNUAL_REPORT_NO);
  }
}
