import {Checklist, ChecklistItem} from '../checklist/checklist';
import {ChecklistService} from '../checklist.service';

export const CHECKLIST_MET_REQUIREMENTS = new Checklist(
  'Waar u aan voldoet',
  'check_circle',
  '#4CAF50',
  [
    new ChecklistItem(
      'Er is een verwerkingsovereenkomst afgesloten met de externe partij',
      'Omdat u de verwerking van persoonsgegevens uitbesteed aan een externe partij, ' +
      'bent u verplicht een verwerkingsoverenkomst af te sluiten.',
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
              '<li>De verwerking is noodzakelijk voor het uitvoeren van een taak van algemeen belang of openbaar gezag.</li>'
              : ''}
            ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_LEGITIMATE) ?
              '<li>De verwerking is noodzakelijk om een gerechtvaardigd belang te behartigen.</li>'
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
      'Er is een data protection impact assessment (DPIA) uitgevoerd.',
      'Omdat u persoonsgegvens met een hoog privacyrisico verwerkt, bent u verplicht een data protection impact assessment te doen.',
      checklistService => checklistService.hasItems(ChecklistService.DPIA_YES)
    ),

    new ChecklistItem(
      'Er is een functionaris gegevensbescherming aangewezen.',
      checklistService => {

        if (checklistService.officerRequired) {
          const reasons = checklistService.officerRequiredReasons.map(reason => `<li>${reason}</li>`);

          return `U bent verplicht een functionaris gegevensbescherming aan te stellen op grond van de onderstaande redenen: <ul>
        ${reasons.join('')}</ul>`;
        }

        return 'Ondanks dat u niet verplicht bent een functionaris gegevensbescherming aan te stellen, is het toch handig om dit te doen.';
      },
      checklistService => checklistService.hasItems(ChecklistService.DATA_PROTECTION_OFFICER_YES)
    ),

    new ChecklistItem(
      'U houdt zich aan privacy by design.',
      'U houdt rekening by zorgvuldige omgang van persoonsgegevens bij het ontwerp van uw dienst.',
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DESIGN_YES)
    ),

    new ChecklistItem(
      'U houdt zich aan privacy by default.',
      'De standaardinstellingen van uw dienst zorgen ervoor dat de betrokkenne de maximale hoeveelheid aan privacy ervaart.',
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DEFAULT_YES)
    ),

    new ChecklistItem(
      'U houdt een verwerkingsregister bij.',
      checklistService => {

        const reasons = checklistService.registryReasons.map(reason => `<li>${reason}</li>`);

        return `U bent verplicht een verwerkingsregister bij te houden vanwege de volgende redenen: <ul>${reasons.join('')}</ul>`;
      },
      checklistService => checklistService.registryRequired && checklistService.hasItems(ChecklistService.PROCESSING_REGISTRY_YES)
    ),

    new ChecklistItem(
      'U meldt datalekken bij de Autoriteit Persoonsgegevens.',
      `U hoeft datalekken slechts te melden als het waarschijnlijk is dat het datalek lijdt tot een risico voor de rechten en vrijheden
        van de betrokkenne. <br>
        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/beveiliging/meldplicht-datalekken#moet-ik-alle-' +
      'datalekken-melden-bij-de-autoriteit-persoonsgegevens-5093'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens.</a>`,
      checklistService => checklistService.hasItems(ChecklistService.INFORMS_SMALL_DATA_BREACH_YES)
    ),

    new ChecklistItem(
      'U meldt ernstige datalekken bij de betrokkenne en de Autoriteit Persoonsgegevens.',
      `U hoeft ernstige datalekken slechts te melden bij de betrokkenne als het waarschijnlijk is dat het datalek lijdt tot een
        <strong>hoog</strong> risico voor de rechten en vrijheden van de betrokkenne. <br>
        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/beveiliging/meldplicht-datalekken#moet-ik-alle-' +
      'datalekken-melden-aan-betrokkenen-5094'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens.</a>`,
      checklistService => checklistService.hasItems(ChecklistService.INFORMS_LARGE_DATA_BREACH_YES)
    ),

    new ChecklistItem(
      'U houdt een datalekregister bij.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.DATA_BREACH_REGISTRY_YES)
    ),

    new ChecklistItem(
      'U stelt uw klanten op de hoogte van hun rechten.',
      'Ondanks dat het niet verplicht is, is het verstandig om de betrokkenne op zijn rechten te wijzen.',
      checklistService => checklistService.hasItems(ChecklistService.INFORMS_SUBJECT_YES)
    ),

    new ChecklistItem(
      'U bent aangesloten bij een gedragscode.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.CODE_OF_CONDUCT_YES)
    ),

    new ChecklistItem(
      'U heeft speciale AVG-certificering behaald.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.CERTIFICATE_YES)
    ),

    new ChecklistItem(
      'U heeft een specifiek ICT-beveiligingsbeleid voor de persoonsgegevens.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.IT_SECURITY_YES)
    ),
    new ChecklistItem(
      'U legt verantwoording af over de verwerking van persoonsgegevens in een (speciaal daarvoor bestemd) jaarverslag.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.ANNUAL_REPORT_YES)
    )
  ]
);
