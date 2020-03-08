import {Component, Input} from '@angular/core';
import {Step} from '../step/step';
import {ChecklistService} from '../checklist.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
/**
 * The steps component renders all the steps
 */
export class StepsComponent {

  /**
   * Contains all the steps that should be presented
   */
  @Input()
  steps: Step[];

  checklistService: ChecklistService;

  constructor(checklistService: ChecklistService) {
    this.checklistService = checklistService;
  }

  /**
   * Returns whether the given step should be displayed
   *
   * A step should be displayed when either:
   * 1) It does not have required checklist items
   * 2) One of the required checklist items is set to `true`
   *
   * @param step The step to check for
   * @return boolean True if the step should be displayed, false if not
   */
  shouldShowStep(step: Step): boolean {

    return step.shouldShow(this.checklistService);
  }
}
