import {Component, Input} from '@angular/core';
import {ChecklistService} from '../checklist.service';
import {Checklist, ChecklistItem} from './checklist';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {

  displayedColumns: string[] = ['icon', 'name'];

  @Input()
  checklist: Checklist;

  constructor(protected checklistService: ChecklistService) {
  }

  get checkedItems(): ChecklistItem[] {
    return this.checklist.items.filter(item => item.shouldShow(this.checklistService));
  }
}
