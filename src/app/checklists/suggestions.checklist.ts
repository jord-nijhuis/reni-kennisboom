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
    ),

    new ChecklistItem(
      'Wees alert dat het uitvoeren van een Data Protection Impact Assessment (DPIA) een periodiek process is.',
      `<p>
        Op het moment dat u nieuwe technologie gaat gebruiken of de persoonsgegevens voor een ander doel verwerkt gaan worden, is er
        juridisch gezien sprake van een nieuwe gegevensverwerking en is een nieuwe DPIA verplicht.
      </p>

      <p>
        Ook wanneer er geen veranderingen plaatsvinden, raadt de Autoriteit Persoonsgegevens aan om 1 keer per 3 jaar een nieuwe Data
        Protection Impact Assessment uit te voeren.
      </p>`,
      checklistService => checklistService.hasItems(ChecklistService.DPIA_YES)
    )
  ]
);
