import {Component, Input, OnDestroy} from '@angular/core';
import {Step} from './step';
import {ChecklistService} from '../checklist.service';
import {Option} from './option';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
/**
 * The StepComponent displays a single step
 */
export class StepComponent implements OnDestroy {

  /**
   * The data of the step we should be presenting
   */
  @Input()
  step: Step;

  constructor(protected checklistService: ChecklistService) {}

  /**
   * Return the checked state of an option
   *
   * @param option The option to check for
   * @return boolean True if the option is checked, false if not
   */
  isChecked(option: Option): boolean {
    return this.checklistService.getItem(option.key);
  }

  /**
   * Delete all the check list items that could have been set through the given options
   */
  deleteChecklistItems() {
    this.checklistService.deleteItems(this.step.options.map(option => option.key));
  }

  /**
   * Gets called when the step is destroyed
   *
   * This happens when the user changed the input in a previous step. As such, we should delete the checklist items we have set in this
   * step.
   */
  ngOnDestroy(): void {
    this.deleteChecklistItems();
  }

  /**
   * Gets called when the user (un)checked an option
   *
   * @param option The option that was interacted with
   * @param checked Whether it was checked or unchecked
   */
  onOptionChange(option: Option, checked: boolean) {
    /**
     * We should delete check list items from other options on three occasions:
     * 1) This is not a step that allows multiple options => delete all the items
     * 2) The newly selected option is exclusive => delete all the items
     * 3) A previously selected option is exclusive => delete that item
     */
    this.step.options.forEach(o => {
      if (!this.step.multiple || option.exclusive || o.exclusive) {
        this.checklistService.deleteItem(o.key);
      }
    });

    this.checklistService.setItem(option.key, checked);
  }
}
