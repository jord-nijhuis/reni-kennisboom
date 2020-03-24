import { Component } from '@angular/core';
import {Checklist} from '../checklist/checklist';
import {CHECKLIST_MET_REQUIREMENTS} from './met.checklist';
import {CHECKLIST_SUGGESTIONS} from './suggestions.checklist';
import {CHECKLIST_UNMET_REQUIREMENTS} from './unmet.checklist';
import {ChecklistService} from '../checklist.service';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.scss']
})
export class ChecklistsComponent {

  constructor(private readonly checklistService: ChecklistService) {}

  get metChecklist(): Checklist {
    return CHECKLIST_MET_REQUIREMENTS;
  }

  get suggestionsChecklist(): Checklist {
    return CHECKLIST_SUGGESTIONS;
  }

  get unmetChecklist(): Checklist {
    return CHECKLIST_UNMET_REQUIREMENTS;
  }

  performRollback() {
    this.checklistService.rollback();
  }
}
