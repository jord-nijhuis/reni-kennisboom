import {Option} from './option';
import {ChecklistService} from '../checklist.service';

/**
 * Contains data regarding a single step.
 *
 * One should see a step as a single question with multiple options
 */
export class Step {

  /**
   * The title of the step
   *
   * This is usually the question being asked
   */
  title: string;

  /**
   * Additional help
   *
   * This is used to provide additional information regarding the question and options
   */
  help: string|null;

  /**
   * Which options the user has for the step
   */
  options: Option[];

  /**
   * If multiple options can be selected
   */
  multiple: boolean;

  /**
   * A callback that should return true if this step should be shown, false if not
   */
  shouldShow: ((checklistService: ChecklistService) => boolean);

  /**
   * @param title The title of the step
   * @param options The options that the user can choose from
   * @param help Additional help for the user (optional)
   * @param multiple Whether the user can select multiple options
   * @param shouldShow Whether this step should be shown. Default is to always show the step
   */
  constructor(
    title: string,
    options: Option[],
    help: string|null = null,
    multiple: boolean = false,
    shouldShow: (checklistService: ChecklistService) => boolean = (_) => true
  ) {
    this.title = title;
    this.help = help;
    this.options = options;
    this.multiple = multiple;
    this.shouldShow = shouldShow;
  }
}

