import {Step} from '../step/step';
import {ChecklistService} from '../checklist.service';
import {Option} from '../step/option';

/**
 * This variable contains all the steps that are required for the checklist
 */
export const STEPS: Step[] = [
  new Step(
    'Worden er binnen uw onderneming, bedrijf of organisatie persoonsgegevens verwerkt?',
    [
      new Option(ChecklistService.PROCESSING_NONE, 'Ik verwerk niks'),
      new Option(ChecklistService.PROCESSING_EXTERNAL, 'De persoonsgegevens worden verwerkt binnen een extern bedrijf'),
      new Option(ChecklistService.PROCESSING_INTERNAL, 'Ik verwerk de gegevens zelf')
    ]
  ),

  new Step(
    'Is er een verwerkersovereenkomst van toepassing?',
    [
      new Option(ChecklistService.AGREEMENT_YES, 'Ja'),
      new Option(ChecklistService.AGREEMENT_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.getItem(ChecklistService.PROCESSING_EXTERNAL)
  ),

  new Step(
    'Mag u deze gegevens verwerken? U voldoet aan tenminste 1 voorwaarde:',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION, 'U heeft toestemming van de betrokkenne'),
      new Option(ChecklistService.PROCESSING_ALLOWED_NECESSARY, 'De verwerking is noodzakelijk om de overeenkomst uit te voeren'),
      new Option(ChecklistService.PROCESSING_ALLOWED_LAW, 'De verwerking is noodzakelijk om een wettelijke verplichting na te komen'),
      new Option(ChecklistService.PROCESSING_ALLOWED_HEALTH, 'De verwerking is noodzakelijk ter bescherming van iemands leven of gezondheid'),
      new Option(ChecklistService.PROCESSING_ALLOWED_GENERAL, 'De verwerking is noodzakelijk voor het algemeen belang of nodig ter behartiging van een gerechtvaardigd belang'),
      new Option(ChecklistService.PROCESSING_ALLOWED_NO, 'Geen van bovenstaande', true)
    ],
    null,
    true,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_INTERNAL,
      ChecklistService.AGREEMENT_YES,
      ChecklistService.AGREEMENT_NO
    )
  ),

  new Step(
    'Kunt u aantonen dat u toestemming heeft van de betrokkenne?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION)
  ),

  new Step(
    'U voldoet aan de verantwoordingsplicht. Dit houdt in dat u een register bijhoudt met welke gegevens u verwerkt, waarom en met welke andere organisaties',
    [
      new Option(ChecklistService.ACCOUNTABILITY_YES, 'Ja'),
      new Option(ChecklistService.ACCOUNTABILITY_NO, 'Nee')
    ],
    null,
    false,
    checklistService => {

      if (checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION) &&
        !checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION_YES) &&
        !checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION_NO)) {
        return false;
      }

      return checklistService.hasItems(
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
        ChecklistService.PROCESSING_ALLOWED_LAW,
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        ChecklistService.PROCESSING_ALLOWED_NO,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION_YES,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION_NO
      );
    }
  ),

  new Step(
    'Worden er gegevens verwerkt met een hoog privacy risico?',
    [
      new Option(ChecklistService.HIGH_RISK_YES, 'Ja'),
      new Option(ChecklistService.HIGH_RISK_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(ChecklistService.ACCOUNTABILITY_YES, ChecklistService.ACCOUNTABILITY_NO)
  ),

  new Step(
    'Is er een Data Protection Impact Assesment (DPIA) uitgevoerd?',
    [
      new Option(ChecklistService.DPIA_YES, 'Ja'),
      new Option(ChecklistService.DPIA_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.getItem(ChecklistService.HIGH_RISK_YES)
  ),

  new Step(
    'Is er een functionaris gegevensbescherming aangesteld?',
    [
      new Option(ChecklistService.DATA_PROTECTION_OFFICER_YES, 'Ja'),
      new Option(ChecklistService.DATA_PROTECTION_OFFICER_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(ChecklistService.DPIA_YES, ChecklistService.DPIA_NO)
  ),

  new Step(
    'U houdt zich aan het wettelijke principe “Privacy by Design”: er worden geen gegevens opgevraagd die u niet nodig heeft',
    [
      new Option(ChecklistService.PRIVACY_BY_DESIGN_YES, 'Ja'),
      new Option(ChecklistService.PRIVACY_BY_DESIGN_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.DATA_PROTECTION_OFFICER_YES,
      ChecklistService.DATA_PROTECTION_OFFICER_NO,
      ChecklistService.HIGH_RISK_NO
    )
  ),

  new Step(
    'U houdt zich aan het wettelijke principe “Privacy by Default”: standaardinstellingen van een web/app/dienst bieden de maximale privacy.',
    [
      new Option(ChecklistService.PRIVACY_BY_DEFAULT_YES, 'Ja'),
      new Option(ChecklistService.PRIVACY_BY_DEFAULT_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PRIVACY_BY_DESIGN_YES,
      ChecklistService.PRIVACY_BY_DESIGN_NO
    )
  ),

  new Step(
    'U bent zich ervan bewust hoe u wettelijk gezien moet handelen ten tijde van een datalek. Korte uitleg betreffende verschil kleine datalek en ernstige lek.',
    [
      new Option(ChecklistService.KNOWLEDGE_DATA_BREACH_YES, 'Ja'),
      new Option(ChecklistService.KNOWLEDGE_DATA_BREACH_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PRIVACY_BY_DEFAULT_YES,
      ChecklistService.PRIVACY_BY_DEFAULT_NO
    )
  ),

  new Step(
    'U stelt uw klanten op de hoogte van hun rechten. Dit kan door uw klanten te wijzen of de relevante bepalingen in de AVG of met een privacyverklaring.',
    [
      new Option(ChecklistService.INFORMS_SUBJECT_YES, 'Ja'),
      new Option(ChecklistService.INFORMS_SUBJECT_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.KNOWLEDGE_DATA_BREACH_YES,
      ChecklistService.KNOWLEDGE_DATA_BREACH_NO
    )
  ),
];
