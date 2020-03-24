import {Checklist, ChecklistItem} from '../checklist/checklist';
import {ChecklistService} from '../checklist.service';

export const CHECKLIST_MET_REQUIREMENTS = new Checklist(
  'Waar u aan voldoet',
  'check_circle',
  '#4CAF50',
  [
    new ChecklistItem(
      'Er is een verwerkingsovereenkomst afgesloten met de externe partij',
      null,
      checklistService => checklistService.hasItems(ChecklistService.AGREEMENT_YES)
    ),

    new ChecklistItem(
      'U heeft een rechtmatige grondslag voor de verwerking van persoonsgegevens',
      (checklistService) => {

        return `U heeft de volgende toereikende grondslagen aangegeven: <ul>
            ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION) ?
              '<li>U heeft toestemming van de betrokkene.</li>' : ''}
            ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_NECESSARY) ?
              '<li>De verwerking is noodzakelijk om de overeenkomst uit te voeren.</li>' : ''}
            ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_LAW) ?
              '<li>De verwerking is noodzakelijk een wettelijke plicht na te komen.</li>' : ''}
            ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_HEALTH) ?
              '<li>De verwerking is noodzakelijk ter bescherming van iemands leven of gezondheid.</li>' : ''}
            ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_GENERAL) ?
              '<li>De verwerking is noodzakelijk voor het algemeen belang of nodig ter behartiging van een gerechtvaardigd belang.</li>'
              : ''}
        </ul>

        ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION) ? `
        <p>
            Tevens is de toestemming ondubbelzinnig en zonder dwang gegeven voor een specifiek doel, heeft u de gebruiker geïnformeerd en
            kunt u dit aantonen.
        </p>` : ''}

        ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_UNDERAGE_YES) ? `<p>
            De toestemming is gegeven door de ouders is gegeven door de ouders of verzorgers van de betrokkenne. Dit is van belang, omdat
            de betrokkenne een kind jonger dan 16 jaar is.
        </p>` : ''}`;
      },
      (checklistService) => checklistService.processingGroundsAreValid
    ),

    new ChecklistItem(
      'Er wordt voldaan aan de verantwoordingsplicht.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.ACCOUNTABILITY_YES)
    ),

    new ChecklistItem(
      'Er is een Data Protection Impact Assessment (DPIA) uitgevoerd.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.DPIA_YES)
    ),

    new ChecklistItem(
      'Er is een functionaris gegevensbescherming aangewezen.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.DATA_PROTECTION_OFFICER_YES)
    ),

    new ChecklistItem(
      'U houdt zich aan het wettelijke vereiste "Privacy by Design".',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DESIGN_YES)
    ),

    new ChecklistItem(
      'U houdt zich aan het wettelijke vereiste "Privacy by Default".',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DEFAULT_YES)
    ),

    new ChecklistItem(
      'U bent zich ervan bewust hoe u moet handelen ten tijde van een datalek.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.KNOWLEDGE_DATA_BREACH_YES)
    ),

    new ChecklistItem(
      'U stelt uw klaneten op de hoogte van hun rechten.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.INFORMS_SUBJECT_YES)
    ),
  ]
);
