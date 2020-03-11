import {Checklist, ChecklistItem} from '../checklist/checklist';
import {ChecklistService} from '../checklist.service';

export const CHECKLIST_SUGGESTIONS = new Checklist(
  'Enkele suggesties',
  'warning',
  '#FFD600',
  [
    new ChecklistItem(
      'Het is verstandig om uw klanten op de hoogte te stellen van hun rechten.',
      null,
      checklistService => !checklistService.hasItems(ChecklistService.INFORMS_SUBJECT_YES)
    )
  ]
);
