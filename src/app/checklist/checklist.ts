import {ChecklistService} from '../checklist.service';

export class Checklist {

  /**
   * The title of the checklist
   */
  title: string;

  /**
   * The icon that is used for each item
   */
  icon: string;

  /**
   * The color that is used for the icons
   */
  iconColor: string;

  /**
   * The items on the checklist
   */
  items: ChecklistItem[] = [];

  constructor(title: string, icon: string, iconColor: string = 'black', items: ChecklistItem[] = []) {
    this.title = title;
    this.icon = icon;
    this.iconColor = iconColor;
    this.items = items;
  }
}

export class ChecklistItem {
  title: string;

  description: string | null;

  /**
   * A callback that should return true if this step should be shown, false if not
   */
  shouldShow: ((checklistService: ChecklistService) => boolean);

  constructor(title: string, description: string | null, shouldShow: (checklistService: ChecklistService) => boolean) {
    this.title = title;
    this.description = description;
    this.shouldShow = shouldShow;
  }
}
