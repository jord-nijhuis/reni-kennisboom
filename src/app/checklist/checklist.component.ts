import {Component, Input} from '@angular/core';
import {ChecklistService} from '../checklist.service';
import {Checklist, ChecklistItem} from './checklist';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {matExpansionAnimations} from '@angular/material/expansion';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  animations: [
    trigger('descriptionExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    matExpansionAnimations.indicatorRotate
  ]
})
export class ChecklistComponent {

  displayedColumns: string[] = ['icon', 'name', 'expand'];

  @Input()
  checklist: Checklist;

  expandedItems: ChecklistItem[] = [];

  constructor(protected checklistService: ChecklistService) {
  }

  get checkedItems(): ChecklistItem[] {
    return this.checklist.items.filter(item => item.shouldShow(this.checklistService));
  }

  isExpanded(item: ChecklistItem): boolean {

    return this.expandedItems.includes(item);
  }

  toggleExpansion(item: ChecklistItem) {

    if (item.description === null) {
      return;
    }

    if (this.isExpanded(item)) {
      delete this.expandedItems[this.expandedItems.indexOf(item)];
    } else {
      this.expandedItems.push(item);
    }
  }

  getDescription(item: ChecklistItem): string|null {
    if (item.description === null) {
      return null;
    }

    if (typeof item.description === 'string') {
      return item.description;
    }

    return item.description(this.checklistService);
  }
}
