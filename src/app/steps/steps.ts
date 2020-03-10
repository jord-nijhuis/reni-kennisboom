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
      new Option(
        ChecklistService.PROCESSING_NONE,
        'Binnen mijn onderneming, bedrijf of organisatie worden geen persoonsgegevens verwerkt.'
      ),
      new Option(
        ChecklistService.PROCESSING_EXTERNAL,
        'Mijn onderneming, bedrijf of organisatie besteedt de verwerking van persoonsgegevens uit aan een extern bedrijf.'
      ),
      new Option(
        ChecklistService.PROCESSING_INTERNAL,
        'Mijn onderneming, bedrijf of organisatie verwerkt zelfstandig persoonsgegevens.'
      )
    ],
    'Er worden persoonsgegevevens verwerkt op het moment dat uw informatie verwerkt die over iemand gaat of ' +
    'te herleiden is naar een persoon. Hierbij kunt u bijvoorbeeld denken aan namen of telefoonnummers.'
  ),

  new Step(
    'Omdat u geen persoonsgegevens verwerkt is deze kennisboom verder niet op u van toepassing.',
    [],
    null,
    null,
    checklistService => checklistService.hasItems(ChecklistService.PROCESSING_NONE)
  ),

  new Step(
    'Heeft u voor deze externe verwerking een verwerkersovereenkomst opgesteld?',
    [
      new Option(ChecklistService.AGREEMENT_YES, 'Ja'),
      new Option(ChecklistService.AGREEMENT_NO, 'Nee')
    ],
    'In de verwerkinsovereenkomst sluit u uit dat de externe partij de persoonsgegevens gaat gebruiken voor eigen doeleinden.',
    false,
    checklistService => checklistService.getItem(ChecklistService.PROCESSING_EXTERNAL)
  ),

  new Step(
    'Mag uw onderneming, bedrijf of organisatie persoonsgegevens verwerken?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION, 'U heeft toestemming van de betrokkenne'),
      new Option(ChecklistService.PROCESSING_ALLOWED_NECESSARY, 'De verwerking is noodzakelijk om de overeenkomst uit te voeren.'),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_LAW,
        'De verwerking is noodzakelijk om een wettelijke verplichting na te komen.'
      ),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        'De verwerking is noodzakelijk ter bescherming van iemands leven of gezondheid'
      ),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        'De verwerking is noodzakelijk voor het algemeen belang of nodig ter behartiging van een gerechtvaardigd belang.'
      ),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_NO,
        'Geen van bovenstaande voorwaarden is op mijn onderneming, bedrijf of organisatie van toepassing. ',
        true
      )
    ],
    'Uw onderneming, bedrijf of organisatie mag ' +
    'persoonsgegevens verwerken indien u voldoet aan tenminste één van de volgende voorwaarden. Meerdere antwoorden zijn mogelijk.',
    true,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_INTERNAL,
      ChecklistService.AGREEMENT_YES,
      ChecklistService.AGREEMENT_NO
    )
  ),

  new Step(
    'Is de toestemming ondubbelzinnig gegeven?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_YES, 'Nee')
    ],
    'Er is sprake van ondubbelzinnige toestemming wanneer de gebruiker zelf moet handelen om de toestemming te verlenen. U mag dus ' +
    'niet vakjes van tevoren aanvinken.',
    false,
    checklistService => checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION)
  ),

  new Step(
    'Heeft u bij het vragen van de toestemming de gebruiker geïnformeerd?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_NO, 'Nee')
    ],
    `Om de gebruiker voldoende te informeren, moet u in ieder geval de vollgende dingen hebben genoemd:<ul>
        <li>De identiteit van uw onderneming, bedrijf of organisatie;</li>
        <li>Het doel van de verwerking waar de toestemming op ziet;</li>
        <li>Welke persoonsgegevens uw onderneming, bedrijf of organisatie verwerkt;</li>
        <li>Dat ze het recht hebben om de toestemming in te trekken.</li>
    </ul>`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_YES,
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO
    )
  ),

  new Step(
    'Is de toestemming gegeven voor een specifiek doel?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_NO, 'Nee')
    ],
    'Toestemming moet worden gegeven voor een specifiek doeleinde. Als er meerdere doeleinden zijn dan moeten die allemaal ' +
    'aangegeven worden.',
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_YES,
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_NO
    )
  ),

  new Step(
    'Is de toestemming onder dwang gegeven?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_NO, 'Nee')
    ],
    'Toestemming door iemand die onder druk gezet is, is niet geldig. Let hier ook op machtsverhoudingen op bijvoorbeeld de werkvloer.',
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_YES,
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_NO
    )
  ),

  new Step(
    'Is de betrokkenne jonger dan 16 jaar?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_UNDERAGE_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_UNDERAGE_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_YES,
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_NO
    )
  ),

  new Step(
    'Heeft de betrokkenne toestemming van zijn ouders of verzorgers?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_NO, 'Nee')
    ],
    'Kinderen jonger dan 16 jaar kunnen zelf niet goed de risico\'s van de verwerking inschatten, daarom hebben zij toestemming ' +
    'van hun ouders of verzorgers nodig.',
    false,
    checklistService => checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_UNDERAGE_YES)
  ),


  new Step(
    'Kunt u aantonen dat u toestemming heeft van de betrokkenne voor het verwerken van de persoonsgegevens?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_UNDERAGE_NO,
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_YES,
      ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_NO
    )
  ),

  new Step(
    'Voldoet uw onderneming, bedrijf of organisatie aan de verantwoordingsplicht?',
    [
      new Option(ChecklistService.ACCOUNTABILITY_YES, 'Ja'),
      new Option(ChecklistService.ACCOUNTABILITY_NO, 'Nee')
    ],
    'Uw onderneming, bedrijf of organisatie voldoet aan de verantwoordingsplicht indien u een register bijhoudt. In dit register ' +
    'staat welke persoonsgegevens u verwerkt, waarom u deze gegevens verwerkt en met welke andere organisaties u deze gegevens deelt.',
    false,
    checklistService => {

      if (checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION) &&
        !checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_YES) &&
        !checklistService.getItem(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_NO)) {
        return false;
      }

      return checklistService.hasItems(
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
        ChecklistService.PROCESSING_ALLOWED_LAW,
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        ChecklistService.PROCESSING_ALLOWED_NO,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_YES,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_NO
      );
    }
  ),

  new Step(
    'Worden er binnen uw onderneming, bedrijf of organisatie gegevens verwerkt met een hoog privacyrisico?',
    [
      new Option(ChecklistService.HIGH_RISK_YES, 'Ja'),
      new Option(ChecklistService.HIGH_RISK_NO, 'Nee')
    ],
    `Onder gegevens met een hoog privacyrisico vallen onder andere: <ul>
        <li>Uitgebreide persoonlijke aspecten op grond waarvan besluiten worden genomen die gevolgen hebben voor de betrokkenne;</li>
        <li>Uitgebreide persoonlijke aspecten op grond waarvan profling plaats kan vinden;</li>
        <li>Bijzondere persoonsgegevens op grote schaal;</li>
        <li>Strafrechtelijke gegevens;</li>
        <li>Gegevens gerelateerd an het volgen van mensen in een publiek toegankelijk gebied.</li>
    </ul>`,
    false,
    checklistService => checklistService.hasItems(ChecklistService.ACCOUNTABILITY_YES, ChecklistService.ACCOUNTABILITY_NO)
  ),

  new Step(
    'Heeft uw onderneming, bedrijf of organisatie een Data Protection Impact Assesment (DPIA) uitgevoerd?',
    [
      new Option(ChecklistService.DPIA_YES, 'Ja'),
      new Option(ChecklistService.DPIA_NO, 'Nee')
    ],
    '(Uitleg DPIA)',
    false,
    checklistService => checklistService.getItem(ChecklistService.HIGH_RISK_YES)
  ),

  new Step(
    'Heeft uw onderneming, bedrijf of organisatie heeft een functionaris gegevensbescherming aangesteld?',
    [
      new Option(ChecklistService.DATA_PROTECTION_OFFICER_YES, 'Ja'),
      new Option(ChecklistService.DATA_PROTECTION_OFFICER_NO, 'Nee')
    ],
    'De functionaris gegevensbescherming is iemand binnen uw onderneming, bedrijf of organisatie die toezicht houdt op de ' +
    'naleving van de verplichtingen uit de Algemene Verordening Gegevensbescherming.',
    false,
    checklistService => checklistService.hasItems(ChecklistService.DPIA_YES, ChecklistService.DPIA_NO)
  ),

  new Step(
    'Houdt uw onderneming, bedrijf of organisatie zich aan het wettelijke vereiste “Privacy by Design”?',
    [
      new Option(ChecklistService.PRIVACY_BY_DESIGN_YES, 'Ja'),
      new Option(ChecklistService.PRIVACY_BY_DESIGN_NO, 'Nee')
    ],
    `Dit betekent dat er in een vroeg stadium zowel technisch als organisatorisch een zorgvuldige omgang met persoonsgegevens
    moet zijn. Een voorbeeld hiervan is dat u geen gegevens opgevraagd bij een klant die u niet nodig heeft.`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.DATA_PROTECTION_OFFICER_YES,
      ChecklistService.DATA_PROTECTION_OFFICER_NO,
      ChecklistService.HIGH_RISK_NO
    )
  ),

  new Step(
    'Houdt uw onderneming, bedrijf of organisatie zich aan het wettelijke vereiste “Privacy by Default”?',
    [
      new Option(ChecklistService.PRIVACY_BY_DEFAULT_YES, 'Ja'),
      new Option(ChecklistService.PRIVACY_BY_DEFAULT_NO, 'Nee')
    ],
    '(Uitleg)',
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PRIVACY_BY_DESIGN_YES,
      ChecklistService.PRIVACY_BY_DESIGN_NO
    )
  ),

  new Step(
    'Is uw onderneming, bedrijf of organisatie zich ervan bewust hoe zij moet handelen ten tijde van een datalek?',
    [
      new Option(ChecklistService.KNOWLEDGE_DATA_BREACH_YES, 'Ja'),
      new Option(ChecklistService.KNOWLEDGE_DATA_BREACH_NO, 'Nee')
    ],
    'Korte uitleg betreffende verschil kleine datalek en ernstige lek.',
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PRIVACY_BY_DEFAULT_YES,
      ChecklistService.PRIVACY_BY_DEFAULT_NO
    )
  ),

  new Step(
    'Stelt uw onderneming, bedrijf of organisatie stelt haar klanten op de hoogte van hun rechten?',
    [
      new Option(ChecklistService.INFORMS_SUBJECT_YES, 'Ja'),
      new Option(ChecklistService.INFORMS_SUBJECT_NO, 'Nee')
    ],
    'Dit kan door uw klanten te wijzen of de relevante bepalingen in de AVG of met een privacyverklaring.',
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.KNOWLEDGE_DATA_BREACH_YES,
      ChecklistService.KNOWLEDGE_DATA_BREACH_NO
    )
  ),
];
