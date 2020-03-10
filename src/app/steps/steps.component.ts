import {
  Component,
  Input,
} from '@angular/core';
import {Step} from '../step/step';
import {ChecklistService} from '../checklist.service';
import {Option} from '../step/option';

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

  constructor(protected checklistService: ChecklistService) {
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

    if (step.options.some((option: Option) => this.checklistService.getItem(option.key))) {
      return false;
    }

    return step.shouldShow(this.checklistService);
  }

  scrollToBottom() {

    return;

    const elements = window.document.getElementsByClassName('scroll-target');

    if (elements.length === 0) {
      return;
    }

    const element = elements.item(elements.length - 1);

    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
