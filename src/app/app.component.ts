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

  /**
   * Whether we should show the checklist
   *
   * The checklist should only be shown if the last step is completed (Informs subject)
   */
  shouldShowChecklist(): boolean {

    return this.checklistService.hasItems(ChecklistService.INFORMS_SUBJECT_YES, ChecklistService.INFORMS_SUBJECT_NO);
  }

  /**
   * Returns false when the user has selected that he does not do any data processing
   */
  doesNotDoProcessing(): boolean {
    return this.checklistService.hasItems(ChecklistService.PROCESSING_NONE);
  }
}
