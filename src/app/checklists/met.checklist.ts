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
      null,
      checklistService => checklistService.hasItems(
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
        ChecklistService.PROCESSING_ALLOWED_LAW,
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION
      )
    ),

    new ChecklistItem(
      'De toestemming is ondubbelzinnig gegeven.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO)
    ),

    new ChecklistItem(
      'U heeft de betrokkenne correct geïnformeerd bij het vragen van toestemming.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_YES)
    ),

    new ChecklistItem(
      'De gevraagde toestemming ziet op een speficiek doel.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_YES)
    ),

    new ChecklistItem(
      'De toestemming is niet onder dwang gegeven.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_NO)
    ),

    new ChecklistItem(
      'De ouders of verzorgers van het kind hebben toestemming gegeven voor de verwerking.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_YES)
    ),

    new ChecklistItem(
      'U kunt aantonen dat u toestemming heeft van de betrokkenne.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_YES)
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
