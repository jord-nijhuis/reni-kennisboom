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
    'te herleiden is naar een persoon. Hierbij kunt u bijvoorbeeld denken aan namen of telefoonnummers.',
    null,
    checklistService => checklistService.hasItems(ChecklistService.START)
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
    `In de verwerkinsovereenkomst sluit u uit dat de externe partij de persoonsgegevens gaat gebruiken voor eigen doeleinden. <br><br>

        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/verwerkers#wanneer-moet-' +
          'ik-een-verwerkersovereenkomst-afsluiten-7101'}">
            Klik hier voor meer informatie van de Autoriteit Persoonsgegevens over de verwerkingsovereenkomst.
        </a>`,
    false,
    checklistService => checklistService.getItem(ChecklistService.PROCESSING_EXTERNAL)
  ),

  new Step(
    'Verwerkt u onderneming, bedrijf of organisatie bijzondere persoonsgegevens?',
    [
      new Option(ChecklistService.PROCESSING_SPECIAL_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_SPECIAL_NO, 'Nee')
    ],
    `Onder bijzondere persoonsgegevens valt het volgende:<ul>
        <li>Gegevens over het ras of de etnische afkomst van de betrokkenne.</li>
        <li>Gegevens over politieke opvattingen.</li>
        <li>Gegevens over religieuze of levensbeschouwende opvattingen.</li>
        <li>Gegevens waaruit blijkt of de betrokkenne lid is van een vakvereniging.</li>
        <li>Gegevens over de gezondheid van de betrokkenne.</li>
        <li>Genetische gegevens.</li>
        <li>Biometrische gegevens ter unieke identificatie van een persoon.</li>
    </ul><br>

    <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/mag-u-persoonsgegevens-' +
    'verwerken#wat-verstaat-de-avg-onder-bijzondere-persoonsgegevens-6339'}">Klik hier voor meer informatie van de Autoriteit
    Persoonsgegevens over bijzondere persoonsgegevens.</a></ul>`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_INTERNAL,
      ChecklistService.AGREEMENT_YES,
      ChecklistService.AGREEMENT_NO
    )
  ),

  new Step(
    'Gebeurt het verwerken van de bijzondere persoonsgegevens op grote schaal en is dit tevens een kernactiviteit?',
    [
      new Option(ChecklistService.PROCESSING_SPECIAL_LARGE_SCALE_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_SPECIAL_LARGE_SCALE_NO, 'Nee')
    ],
    `Bij grote schaal moet u denken aan bijvoorbeeld verwerking van klantgegevens als standaardprocedure. Slechts een enkele verwerking
    valt hier niet onder.`,
    false,
    checklistService => checklistService.getItem(ChecklistService.PROCESSING_SPECIAL_YES)
  ),

  new Step(
    'Wat is de grondslag van de verwerking van de persoonsgegevens?',
    [
      new Option(ChecklistService.PROCESSING_ALLOWED_PERMISSION, 'U heeft toestemming van de betrokkenne'),
      new Option(ChecklistService.PROCESSING_ALLOWED_NECESSARY, 'De verwerking is noodzakelijk om de overeenkomst uit te voeren.'),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_LAW,
        'De verwerking is noodzakelijk om een wettelijke verplichting na te komen.'
      ),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        'De verwerking is noodzakelijk ter bescherming van iemands leven of gezondheid (vitale belangen).'
      ),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        'De verwerking is noodzakelijk voor het uitvoeren van een taak van algemeen belang of openbaar gezag.'
      ),
      new Option(
        ChecklistService.PROCESSING_ALLOWED_LEGITIMATE,
        'De verwerking is noodzakelijk om een gerechtvaardigd belang te behartigen.'
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
      ChecklistService.PROCESSING_SPECIAL_NO,
      ChecklistService.PROCESSING_SPECIAL_LARGE_SCALE_YES,
      ChecklistService.PROCESSING_SPECIAL_LARGE_SCALE_NO
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
        <li>Dat de betrokkenne het recht heeft om de toestemming in te trekken.</li>
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
    'Worden er binnen uw onderneming, bedrijf of organisatie als kernactiviteit op grote schaal individuen gevolgd?',
    [
      new Option(ChecklistService.PROCESSING_TRACKING_LARGE_SCALE_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_TRACKING_LARGE_SCALE_NO, 'Nee')
    ],
    `Hierbij moet u bijvoorbeeld denken aan cameratoezicht over het profileren van mensen. Onder grote schaal valt bijvoorbeeld de
    verwerking van klantgegevens als standaardprocedure. Slechts een enkele verwerking valt hier niet onder.`,
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
        ChecklistService.PROCESSING_ALLOWED_LEGITIMATE,
        ChecklistService.PROCESSING_ALLOWED_NO,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_YES,
        ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_NO
      );
    }
  ),

  new Step(
    'Werken er uw binnen uw onderneming, bedrijf of organisatie meer dan 250 mensen?',
    [
      new Option(ChecklistService.ORGANISATION_LARGE_YES, 'Ja'),
      new Option(ChecklistService.ORGANISATION_LARGE_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_TRACKING_LARGE_SCALE_YES,
      ChecklistService.PROCESSING_TRACKING_LARGE_SCALE_NO
    )
  ),

  new Step(
    'Is de verwerking van persoonsgegevens incidenteel?',
    [
      new Option(ChecklistService.PROCESSING_INCIDENTAL_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_INCIDENTAL_NO, 'Nee')
    ],
    `In praktijk is de verwerking van persoonsgegevens zelden incidenteel. Als u het niet zeker weet, dan is het antwoord op deze vraag
    hoogstwaarschijnlijk "nee".`,
    false,
    checklistService => checklistService.hasItems(ChecklistService.ORGANISATION_LARGE_NO)
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
    </ul>
    <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/data-protection-impact-assessment-dpia#voor-welke-' +
    'soorten-verwerkingen-is-het-uitvoeren-van-een-dpia-verplicht-6667'}">Klik hier voor een completere lijst van de Autoriteit
    Persoonsgegevens.</a>`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.ORGANISATION_LARGE_YES,
      ChecklistService.PROCESSING_INCIDENTAL_NO,
      ChecklistService.PROCESSING_INCIDENTAL_YES
    )
  ),

  new Step(
    'Heeft uw onderneming, bedrijf of organisatie een Data Protection Impact Assesment (DPIA) uitgevoerd?',
    [
      new Option(ChecklistService.DPIA_YES, 'Ja'),
      new Option(ChecklistService.DPIA_NO, 'Nee')
    ],
    `Met een data protection impact assessment onderzoekt u vooraf de privacyrisico's van het verwerken van de persoonsgegevens.`,
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
    checklistService => checklistService.hasItems(
      ChecklistService.DPIA_YES,
      ChecklistService.DPIA_NO,
      ChecklistService.HIGH_RISK_NO,
      )
  ),

  new Step(
    'Houdt uw onderneming, bedrijf of organisatie zich aan privacy by design?',
    [
      new Option(ChecklistService.PRIVACY_BY_DESIGN_YES, 'Ja'),
      new Option(ChecklistService.PRIVACY_BY_DESIGN_NO, 'Nee')
    ],
    `Om hieraan te voldoen moet er al in een vroeg stadium zowel technisch als organisatorisch rekening gehouden worden met een
    zorgvuldige omgang van persoonsgegevens: gegevensbescherming zit verwerkt in het design. Een voorbeeld hiervan is dat u geen gegevens
    verwerkt van de betrokkenne die u niet nodig heeft.`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.DATA_PROTECTION_OFFICER_YES,
      ChecklistService.DATA_PROTECTION_OFFICER_NO
    )
  ),

  new Step(
    'Houdt uw onderneming, bedrijf of organisatie zich aan privacy by default?',
    [
      new Option(ChecklistService.PRIVACY_BY_DEFAULT_YES, 'Ja'),
      new Option(ChecklistService.PRIVACY_BY_DEFAULT_NO, 'Nee')
    ],
    `Er is sprake van privacy by default als de standaardinstellingen van die dienst zo zijn ingesteld dat de betrokkenne de maximale
    privacy ervaart. U kunt hierbij denken aan het niet-automatisch aanvinken van opties die betrekking hebben op de privacy.`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PRIVACY_BY_DESIGN_YES,
      ChecklistService.PRIVACY_BY_DESIGN_NO
    )
  ),

  new Step(
    'Houdt uw onderneming, bedrijf of organisatie een verwerkingsregister bij?',
    [
      new Option(ChecklistService.PROCESSING_REGISTRY_YES, 'Ja'),
      new Option(ChecklistService.PROCESSING_REGISTRY_NO, 'Nee')
    ],
    `In het verwerkingsregister bevat informatie over de persoonsgegevens die u verwerkt. <br>
    <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/verantwoordingsplicht#' +
    'wat-moet-er-in-het-verwerkingsregister-staan-7193'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens over de inhoud
    van het verwerkingsregister</a>`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PRIVACY_BY_DEFAULT_YES,
      ChecklistService.PRIVACY_BY_DEFAULT_NO
    )
  ),

  new Step(
    'Meldt uw onderneming, bedrijf of organisatie datalekken bij de Autoriteit Persoonsgegevens?',
    [
      new Option(ChecklistService.INFORMS_SMALL_DATA_BREACH_YES, 'Ja'),
      new Option(ChecklistService.INFORMS_SMALL_DATA_BREACH_NO, 'Nee')
    ],
    `U hoeft een datalek slechts te melden als het waarschijnlijk is dat het datalek lijdt tot een risico voor de rechten en vrijheden
    van de betrokkenne. <br>
    <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/beveiliging/meldplicht-datalekken#moet-ik-alle-' +
    'datalekken-melden-bij-de-autoriteit-persoonsgegevens-5093'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens.</a>`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.PROCESSING_REGISTRY_YES,
      ChecklistService.PROCESSING_REGISTRY_NO
    )
  ),

  new Step(
    'Meldt uw onderneming, bedrijf of organisatie datalekken met een hoog riscio bij de betrokkenne en de Autoriteit Persoonsgegevens?',
    [
      new Option(ChecklistService.INFORMS_LARGE_DATA_BREACH_YES, 'Ja'),
      new Option(ChecklistService.INFORMS_LARGE_DATA_BREACH_NO, 'Nee')
    ],
    `U hoeft een datalek slechts te melden bij de betrokkenne als het waarschijnlijk is dat het datalek lijdt tot een hoog risico
    voor de rechten en vrijheden van de betrokkenne. <br>
    <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/beveiliging/meldplicht-datalekken#moet-ik-alle-' +
    'datalekken-melden-aan-betrokkenen-5094'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens.</a>`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.INFORMS_SMALL_DATA_BREACH_YES,
      ChecklistService.INFORMS_SMALL_DATA_BREACH_NO
    )
  ),

  new Step(
    'Heeft uw onderneming, bedrijf of organisatie een datalekregister?',
    [
      new Option(ChecklistService.DATA_BREACH_REGISTRY_YES, 'Ja'),
      new Option(ChecklistService.DATA_BREACH_REGISTRY_NO, 'Nee')
    ],
    'Let op: ook als u het datalek niet hoeft te melden, bent u wel verplicht het datalek bij te houden.',
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.INFORMS_LARGE_DATA_BREACH_YES,
      ChecklistService.INFORMS_LARGE_DATA_BREACH_NO
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
      ChecklistService.DATA_BREACH_REGISTRY_YES,
      ChecklistService.DATA_BREACH_REGISTRY_NO
    )
  ),

  new Step(
    'Is uw onderneming, bedrijf of organisatie aangesloten bij een gedragscode?',
    [
      new Option(ChecklistService.CODE_OF_CONDUCT_YES, 'Ja'),
      new Option(ChecklistService.CODE_OF_CONDUCT_NO, 'Nee')
    ],
    `In een gedragscode worden de algemene normen van de AVG geconcretiseerd voor alle deelnemers.
    <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/avg-gedragscode'}">Klik hier voor meer informatie van
    de Autoriteit Persoonsgegevens.</a>"`,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.INFORMS_SUBJECT_YES,
      ChecklistService.INFORMS_SUBJECT_NO
    )
  ),

  new Step(
    'Heeft uw onderneming, bedrijf of organisatie aangesloten speciale AVG-certificering behaald?',
    [
      new Option(ChecklistService.CERTIFICATE_YES, 'Ja'),
      new Option(ChecklistService.CERTIFICATE_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.CODE_OF_CONDUCT_YES,
      ChecklistService.CODE_OF_CONDUCT_NO
    )
  ),

  new Step(
    'Heeft uw onderneming, bedrijf of organisatie een specifiek ICT-beveiligingsbeleid voor de persoonsgegevens?',
    [
      new Option(ChecklistService.IT_SECURITY_YES, 'Ja'),
      new Option(ChecklistService.IT_SECURITY_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.CERTIFICATE_YES,
      ChecklistService.CERTIFICATE_NO
    )
  ),

  new Step(
    `Legt uw onderneming, bedrijf of organisatie verantwoording af over de verwerking van persoonsgegevens in een (speciaal daarvoor
     bestemd) jaarverslag?`,
    [
      new Option(ChecklistService.ANNUAL_REPORT_YES, 'Ja'),
      new Option(ChecklistService.ANNUAL_REPORT_NO, 'Nee')
    ],
    null,
    false,
    checklistService => checklistService.hasItems(
      ChecklistService.IT_SECURITY_YES,
      ChecklistService.IT_SECURITY_NO
    )
  ),
];
