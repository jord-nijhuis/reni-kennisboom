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
      'Het is soms aangeraden om een functionaris gegevensbescherming aan te stellen.',
      `Ondanks dat u niet verplicht bent een functionaris gegevensbescherming aan te stellen, kan dit toch handig zijn.`,
      checklistService => !checklistService.officerRequired && !checklistService.hasItems(ChecklistService.DATA_PROTECTION_OFFICER_YES)
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
    ),

    new ChecklistItem(
      'U kunt zich aansluiten bij een gedragscode.',
      `In een gedragscode worden de algemene normen van de AVG geconcretiseerd voor alle deelnemers.
        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/avg-gedragscode'}">Klik hier voor meer informatie van
        de Autoriteit Persoonsgegevens.</a>"`,
      checklistService => checklistService.hasItems(ChecklistService.CODE_OF_CONDUCT_NO)
    ),

    new ChecklistItem(
      'U kunt speciale AVG-certificering behalen.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.CERTIFICATE_NO)
    ),

    new ChecklistItem(
      'U kunt een een specifiek ICT-beveiligingsbeleid voor de persoonsgegevens opstellen.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.IT_SECURITY_NO)
    ),
    new ChecklistItem(
      'U kunt verantwoording afleggen over de verwerking van persoonsgegevens in een (speciaal daarvoor bestemd) jaarverslag.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.ANNUAL_REPORT_NO)
    )
  ]
);
