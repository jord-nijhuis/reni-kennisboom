import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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
export class StepComponent implements OnInit {

  constructor(protected checklistService: ChecklistService) {
  }


  /**
   * The data of the step we should be presenting
   */
  @Input()
  step: Step;

  checks: { [key: string]: boolean } = {};

  ngOnInit(): void {

    this.step.options.forEach(option => this.checks[option.key] = this.checklistService.getItem(option.key));
  }

  /**
   * Return the checked state of an option
   *
   * @param option The option to check for
   * @return boolean True if the option is checked, false if not
   */
  isChecked(option: Option): boolean {
    return this.checks[option.key];
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
        this.checks[o.key] = false;
      }
    });

    this.checks[option.key] = checked;
  }

  /**
   * Save all the checked options to the checklist service
   *
   * As a side-effect, this will also navigate to the next step
   */
  saveOptions() {

    const items = this.step.options
      .filter(option => this.isChecked(option))
      .map(option => {
        return {
          key: option.key,
          value: true
        };
      });

    this.checklistService.setItems(...items);
  }

  performRollback() {
    this.checklistService.rollback();
  }

  get showPrevious(): boolean {

    return this.checklistService.hasHistory();
  }

  get saveDisabled(): boolean {

    return !Object.values<boolean>(this.checks).some(value => value);
  }

}
