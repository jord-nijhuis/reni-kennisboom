import {Checklist, ChecklistItem} from '../checklist/checklist';
import {ChecklistService} from '../checklist.service';

export const CHECKLIST_UNMET_REQUIREMENTS = new Checklist(
  'Waar u niet aan voldoet',
  'error',
  '#D50000',
  [
    new ChecklistItem(
      'Er is geen verwerkingsovereenkomst afgesloten met de externe partij.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.AGREEMENT_NO)
    ),

    new ChecklistItem(
      'U heeft geen rechtmatige grondslag voor de verwerking van persoonsgegevens',
      null,
      checklistService => !checklistService.hasItems(
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
        ChecklistService.PROCESSING_ALLOWED_LAW,
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION
      )
    ),

    new ChecklistItem(
      'De toestemming is dubbelzinnig gegeven.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_YES)
    ),

    new ChecklistItem(
      'U heeft de betrokkenne incorrect geïnformeerd bij het vragen van toestemming.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_NO)
    ),

    new ChecklistItem(
      'De gevraagde toestemming ziet niet op een speficiek doel.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_NO)
    ),

    new ChecklistItem(
      'De toestemming is onder dwang gegeven.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_YES)
    ),

    new ChecklistItem(
      'De ouders of verzorgers van het kind hebben geen toestemming gegeven voor de verwerking.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_NO)
    ),

    new ChecklistItem(
      'U kunt niet aantonen dat u toestemming heeft van de betrokkenne.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_NO)
    ),

    new ChecklistItem(
      'Er wordt niet voldaan aan de verantwoordingsplicht.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.ACCOUNTABILITY_NO)
    ),

    new ChecklistItem(
      'Er is geen Data Protection Impact Assessment (DPIA) uitgevoerd.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.DPIA_NO)
    ),

    new ChecklistItem(
      'Er is geen functionaris gegevensbescherming aangewezen.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.DATA_PROTECTION_OFFICER_NO)
    ),

    new ChecklistItem(
      'U houdt zich niet aan het wettelijke vereiste "Privacy by Design".',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DESIGN_NO)
    ),

    new ChecklistItem(
      'U houdt zich niet aan het wettelijke vereiste "Privacy by Default".',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DEFAULT_NO)
    ),

    new ChecklistItem(
      'U bent zich er niet van bewust hoe u moet handelen ten tijde van een datalek.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.KNOWLEDGE_DATA_BREACH_NO)
    )
  ]
);
