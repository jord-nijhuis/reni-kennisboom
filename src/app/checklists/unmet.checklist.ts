import {Checklist, ChecklistItem} from '../checklist/checklist';
import {ChecklistService} from '../checklist.service';

export const CHECKLIST_UNMET_REQUIREMENTS = new Checklist(
  'Waar u niet aan voldoet',
  'error',
  '#D50000',
  [
    new ChecklistItem(
      'Er is geen verwerkingsovereenkomst afgesloten met de externe partij.',
      `<p>
        Omdat u de verwerking van persoonsgegevens uitbesteedt aan een externe partij, bent u verplicht een
        verwerkingsovereenkomst op te stellen.
        </p>

        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/verwerkers#wanneer-moet-' +
          'ik-een-verwerkersovereenkomst-afsluiten-7101'}">
            Klik hier voor meer informatie van de Autoriteit Persoonsgegevens over de verwerkingsovereenkomst.
        </a>`,
      checklistService => checklistService.hasItems(ChecklistService.AGREEMENT_NO)
    ),

    new ChecklistItem(
      'U heeft geen rechtmatige grondslag voor de verwerking van persoonsgegevens',
      (checklistService) => {

        const processingErrors: string[] = [];

        if (checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO)) {
          processingErrors.push('<li>De toestemming is ondubbelzinnig gegeven.</li>');
        }

        if (checklistService.hasItems(ChecklistService.INFORMS_SUBJECT_NO)) {
          processingErrors.push('<li>De betrokkenne is niet voldoende geïnformeerd.</li>');
        }

        if (checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_NO)) {
          processingErrors.push('<li>De toestemming is niet gegeven voor een specifiek doeleinde.</li>');
        }

        if (checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_YES)) {
          processingErrors.push('<li>De toestemming is onder dwang gegeven.</li>');
        }

        if (checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_NO)) {
          processingErrors.push('<li>U kunt niet aantonenen dat de betrokkenne toestemming heeft gegeven.</li>');
        }

        if (checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_NO)) {
          processingErrors.push(`<li>De ouders of verzorgers van de betrokkenne hebben geen toestemming gegeven. Dit is vereist omdat de
          betrokkenne onder de 16 jaar oud is.</li>`);
        }

        return `
          <p>
              Bij de vraag over grondlsagen voor de verwerking van persoonsgegevens heeft u geen toereikende grondslag gegeven. De volgende
              grondlagen zijn mogelijk: <ul>
                  <li>U heeft toestemming van de betrokkene.</li>
                  <li>De verwerking is noodzakelijk om de overeenkomst uit te voeren.</li>
                  <li>De verwerking is noodzakelijk een wettelijke plicht na te komen.</li>
                  <li>De verwerking is noodzakelijk ter bescherming van iemands leven of gezondheid.</li>
                  <li>De verwerking is noodzakelijk voor het algemeen belang of nodig ter behartiging van een gerechtvaardigd belang.</li>
              </ul>
          </p>

          ${checklistService.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION) ?
            `<p>
                Wel heeft u aangegeven dat u toestemming heeft van de betrokkenne. Echter, voordat deze toestemming toereikend is, moeten
                de volgende problemen verholpen worden:
                <ul>${processingErrors.join('')}</ul>
            </p>` : '' }
      `;
      },
      checklistService => !checklistService.processingGroundsAreValid
    ),

    new ChecklistItem(
      'Er is geen data protection impact assessment (DPIA) uitgevoerd.',
      'U bent verplicht een data protection impact assessment uit te voeren omdat u persoonsgegevens met een hoog risico verwerkt.',
      checklistService => checklistService.hasItems(ChecklistService.DPIA_NO)
    ),

    new ChecklistItem(
      'Er is geen functionaris gegevensbescherming aangewezen.',
      checklistService => {

        const reasons = checklistService.officerRequiredReasons.map(reason => `<li>${reason}</li>`);

        return `U bent verplicht een functionaris gegevensbescherming aan te stellen op grond van de onderstaande redenen: <ul>
        ${reasons.join('')}</ul>`;
      },
      checklistService => checklistService.officerRequired && checklistService.hasItems(ChecklistService.DATA_PROTECTION_OFFICER_NO)
    ),

    new ChecklistItem(
      'U houdt zich niet aan privacy by design.',
      `<p>Zorg ervoor dat in het ontwerp van uw dienst zowel technisch als organisatorisch rekening gehouden worden met een
        zorgvuldige omgang van persoonsgegevens</p>`,
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DESIGN_NO)
    ),

    new ChecklistItem(
      'U houdt zich niet aan privacy by default.',
      `<p>
        Het is verplicht dat de gebruiker de maximale hoeveelheid privacy ervaart op grond van de standaardinstellingen van uw dienst.
      </p>`,
      checklistService => checklistService.hasItems(ChecklistService.PRIVACY_BY_DEFAULT_NO)
    ),

    new ChecklistItem(
      'U houdt geen verwerkingsregister bij.',
      checklistService => {

        const reasons = checklistService.registryReasons.map(reason => `<li>${reason}</li>`);

        return `U bent verplicht een verwerkingsregister bij te houden vanwege de volgende redenen: <ul>${reasons.join('')}</ul>`;
      },
      checklistService => checklistService.registryRequired && checklistService.hasItems(ChecklistService.PROCESSING_REGISTRY_NO)
    ),

    new ChecklistItem(
      'U meldt datalekken niet bij de Autoriteit Persoonsgegevens.',
      `U hoeft datalekken slechts te melden als het waarschijnlijk is dat het datalek lijdt tot een risico voor de rechten en vrijheden
        van de betrokkenne. <br>
        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/beveiliging/meldplicht-datalekken#moet-ik-alle-' +
      'datalekken-melden-bij-de-autoriteit-persoonsgegevens-5093'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens.</a>`,
      checklistService => checklistService.hasItems(ChecklistService.INFORMS_LARGE_DATA_BREACH_NO)
    ),

    new ChecklistItem(
      'U meldt ernstige datalekken niet bij de betrokkenne en de Autoriteit Persoonsgegevens.',
      `U hoeft ernstige datalekken slechts te melden bij de betrokkenne als het waarschijnlijk is dat het datalek lijdt tot een
        <strong>hoog</strong> risico voor de rechten en vrijheden van de betrokkenne. <br>
        <a target="_blank" href="${'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/beveiliging/meldplicht-datalekken#moet-ik-alle-' +
      'datalekken-melden-aan-betrokkenen-5094'}">Klik hier voor meer informatie van de Autoriteit Persoonsgegevens.</a>`,
      checklistService => checklistService.hasItems(ChecklistService.INFORMS_LARGE_DATA_BREACH_NO)
    ),

    new ChecklistItem(
      'U houdt geen datalekregister bij.',
      null,
      checklistService => checklistService.hasItems(ChecklistService.DATA_BREACH_REGISTRY_NO)
    ),
  ]
);
