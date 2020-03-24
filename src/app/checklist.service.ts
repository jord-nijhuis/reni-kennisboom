import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  /** When the checklist is started */
  public static START = 'START';

  /** When there is no processing at all */
  public static PROCESSING_NONE = 'PROCESSING_NONE';

  /** When the processing happens externally */
  public static PROCESSING_EXTERNAL = 'PROCESSING_EXTERNAL';

  /** When there is some internal processing */
  public static PROCESSING_INTERNAL = 'PROCESSING_INTERNAL';

  /** There is no agreement with an external party */
  public static AGREEMENT_NO = 'AGREEMENT_NO';

  /** There is an agreement with an external party */
  public static AGREEMENT_YES = 'AGREEMENT_YES';

  /** There is no reason for processing */
  public static PROCESSING_ALLOWED_NO = 'PROCESSING_ALLOWED_NO';

  /**
   * processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request
   * of the data subject prior to entering into a contract (1 clause B b GDPR)
   */
  public static PROCESSING_ALLOWED_NECESSARY = 'PROCESSING_ALLOWED_NECESSARY';

  /** Processing is necessary for compliance with a legal obligation to which the controller is subject (1 clause c GDPR) */
  public static PROCESSING_ALLOWED_LAW = 'PROCESSING_ALLOWED_LAW';

  /** Processing is necessary in order to protect the vital interests of the data subject or of another natural person (1 clause d GDPR) */
  public static PROCESSING_ALLOWED_HEALTH = 'PROCESSING_ALLOWED_HEALTH';

  /** processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority
   * vested in the controller 1e)
   */
  public static PROCESSING_ALLOWED_GENERAL = 'PROCESSING_ALLOWED_GENERAL';

  /** the data subject has given consent to the processing of his or her personal data for one or more specific purposes
   * (1 clause a GDPR)
   */
  public static PROCESSING_ALLOWED_PERMISSION = 'PROCESSING_ALLOWED_PERMISSION';

  /** The consent was given by force */
  public static PROCESSING_ALLOWED_PERMISSION_FORCED_YES = 'PROCESSING_ALLOWED_PERMISSION_FORCED_YES';

  /** The consent was not given by force */
  public static PROCESSING_ALLOWED_PERMISSION_FORCED_NO = 'PROCESSING_ALLOWED_PERMISSION_FORCED_NO';

  /** The consent was ambiguous */
  public static PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_YES = 'PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_YES';

  /** The consent was unambiguous */
  public static PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO = 'PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO';

  /** The consent was ambiguous */
  public static PROCESSING_ALLOWED_PERMISSION_INFORMED_YES = 'PROCESSING_ALLOWED_PERMISSION_INFORMED_YES';

  /** The consent was unambiguous */
  public static PROCESSING_ALLOWED_PERMISSION_INFORMED_NO = 'PROCESSING_ALLOWED_PERMISSION_INFORMED_NO';

  /** The consent was ambiguous */
  public static PROCESSING_ALLOWED_PERMISSION_SPECIFIC_YES = 'PROCESSING_ALLOWED_PERMISSION_SPECIFIC_YES';

  /** The consent was unambiguous */
  public static PROCESSING_ALLOWED_PERMISSION_SPECIFIC_NO = 'PROCESSING_ALLOWED_PERMISSION_SPECIFIC_NO';

  /** You can proof that consent was given */
  public static PROCESSING_ALLOWED_PERMISSION_PROOF_YES = 'PROCESSING_ALLOWED_PERMISSION_PROOF_YES';

  /** You cannot proof that consent was given */
  public static PROCESSING_ALLOWED_PERMISSION_PROOF_NO = 'PROCESSING_ALLOWED_PERMISSION_PROOF_NO';

  /** The consent was given by an underage person */
  public static PROCESSING_ALLOWED_PERMISSION_UNDERAGE_YES = 'PROCESSING_ALLOWED_PERMISSION_UNDERAGE_YES';

  /** The consent was not given by an underage person */
  public static PROCESSING_ALLOWED_PERMISSION_UNDERAGE_NO = 'PROCESSING_ALLOWED_PERMISSION_UNDERAGE_NO';

  /** The parents gave their consent */
  public static PROCESSING_ALLOWED_PERMISSION_PARENTS_YES = 'PROCESSING_ALLOWED_PERMISSION_PARENTS_YES';

  /** The parents did not give their consent */
  public static PROCESSING_ALLOWED_PERMISSION_PARENTS_NO = 'PROCESSING_ALLOWED_PERMISSION_PARENTS_NO';

  /** Can demonstrate that there is a compliance with the accountability (5 clause 2 GDPR) */
  public static ACCOUNTABILITY_YES = 'ACCOUNTABILITY_YES';

  /** Cannot demonstrate that there is a compliance with the accountability (5 clause 2 GDPR) */
  public static ACCOUNTABILITY_NO = 'ACCOUNTABILITY_NO';

  /** Processing contains high risk data (35 GDPR) */
  public static HIGH_RISK_YES = 'HIGH_RISK_YES';

  /** Processing does not contain high risk data (35 GDPR) */
  public static HIGH_RISK_NO = 'HIGH_RISK_NO';

  /** Processing contains high risk data (35 GDPR) */
  public static DPIA_YES = 'DPIA_YES';

  /** Processing does not contain high risk data (35 GDPR) */
  public static DPIA_NO = 'DPIA_NO';

  /** Processing contains high risk data (35 GDPR) */
  public static DATA_PROTECTION_OFFICER_YES = 'DATA_PROTECTION_OFFICER_YES';

  /** Processing does not contain high risk data (35 GDPR) */
  public static DATA_PROTECTION_OFFICER_NO = 'DATA_PROTECTION_OFFICER_NO';

  public static PRIVACY_BY_DESIGN_YES = 'PRIVACY_BY_DESIGN_YES';

  public static PRIVACY_BY_DESIGN_NO = 'PRIVACY_BY_DESIGN_NO';

  public static PRIVACY_BY_DEFAULT_YES = 'PRIVACY_BY_DEFAULT_YES';

  public static PRIVACY_BY_DEFAULT_NO = 'PRIVACY_BY_DEFAULT_NO';

  public static INFORMS_SMALL_DATA_BREACH_YES = 'INFORMS_SMALL_DATA_BREACH_YES';

  public static INFORMS_SMALL_DATA_BREACH_NO = 'INFORMS_SMALL_DATA_BREACH_NO';

  public static INFORMS_LARGE_DATA_BREACH_YES = 'INFORMS_LARGE_DATA_BREACH_YES';

  public static INFORMS_LARGE_DATA_BREACH_NO = 'INFORMS_LARGE_DATA_BREACH_NO';

  public static INFORMS_SUBJECT_YES = 'INFORMS_SUBJECT_YES';

  public static INFORMS_SUBJECT_NO = 'INFORMS_SUBJECT_NO';

  /**
   * When the organisation has more > 250 employees
   */
  public static ORGANISATION_LARGE_YES = 'ORGANISATION_LARGE_YES';

  /**
   * When the organisation has < 250 employees
   */
  public static ORGANISATION_LARGE_NO = 'ORGANISATION_LARGE_NO';

  /**
   * The processing only happens incidentally
   */
  public static PROCESSING_INCIDENTAL_YES = 'PROCESSING_INCIDENTAL_YES';

  /**
   * The processing happens coincidental
   */
  public static PROCESSING_INCIDENTAL_NO = 'PROCESSING_INCIDENTAL_NO';

  /**
   * Processing of special categories of personal data
   */
  public static PROCESSING_SPECIAL_YES = 'PROCESSING_SPECIAL_YES';

  /**
   * No processing of special categories of personal data
   */
  public static PROCESSING_SPECIAL_NO = 'PROCESSING_SPECIAL_NO';

  /**
   * The user has a processing registry (verwerkingsregister)
   */
  public static PROCESSING_REGISTRY_YES = 'PROCESSING_REGISTRY_YES';

  /**
   * The user does not have a processing registry
   */
  public static PROCESSING_REGISTRY_NO = 'PROCESSING_REGISTRY_NO';

  /**
   * The user has a data breach registry
   */
  public static DATA_BREACH_REGISTRY_YES = 'DATA_BREACH_REGISTRY_YES';

  /**
   * The user does not have a data breach registry
   */
  public static DATA_BREACH_REGISTRY_NO = 'DATA_BREACH_REGISTRY_NO';

  protected checklist: {[key: string]: boolean} = {};

  protected history: Item[][] = [];

  constructor() { }

  public setItems(...items: Item[]) {

    this.history.push(items);

    items.forEach((item) => this.checklist[item.key] = item.value);
  }

  public getItem(key: string): boolean {
    return this.checklist[key] ?? false;
  }

  public hasItems(...keys: string[]) {
    return keys.some((key) => this.getItem(key));
  }

  public deleteItem(key: string) {

    delete this.checklist[key];
  }

  public deleteItems(keys: string[]) {

    keys.forEach(key => this.deleteItem(key));
  }

  public rollback() {
    const items = this.history.pop();

    if (items === undefined) {
      return;
    }

    items.forEach((item) => delete this.checklist[item.key]);
  }

  hasHistory() {
    return this.history.length > 0;
  }

  public get processingGroundsAreValid(): boolean {
     let valid = false;
     if (this.hasItems(
        ChecklistService.PROCESSING_ALLOWED_LAW,
        ChecklistService.PROCESSING_ALLOWED_HEALTH,
        ChecklistService.PROCESSING_ALLOWED_GENERAL,
        ChecklistService.PROCESSING_ALLOWED_NECESSARY,
      )) {
        valid = true;
      }

     if (this.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION)) {
        // If the user asks for permission, whether processing is allowed depends on other criteria
        valid = this.hasItems(
          ChecklistService.PROCESSING_ALLOWED_PERMISSION,
          ChecklistService.PROCESSING_ALLOWED_PERMISSION_AMBIGUOUS_NO,
          ChecklistService.PROCESSING_ALLOWED_PERMISSION_INFORMED_YES,
          ChecklistService.PROCESSING_ALLOWED_PERMISSION_SPECIFIC_YES,
          ChecklistService.PROCESSING_ALLOWED_PERMISSION_FORCED_NO,
          ChecklistService.PROCESSING_ALLOWED_PERMISSION_PROOF_YES
        );

        // If the user is underage, no permission of the parents results in issues.
        if (this.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_UNDERAGE_YES) &&
          this.hasItems(ChecklistService.PROCESSING_ALLOWED_PERMISSION_PARENTS_NO)) {
          valid = false;
        }
      }

     return valid;
  }

  /**
   * Whether the user is required to maintain a registry of all processing
   */
  public get registryRequired(): boolean {

    if (this.hasItems(ChecklistService.ORGANISATION_LARGE_YES)) {
      return true;
    }

    return this.hasItems(
      ChecklistService.PROCESSING_INCIDENTAL_NO,
      ChecklistService.HIGH_RISK_YES,
      ChecklistService.PROCESSING_SPECIAL_YES
    );
  }

  public get registryReasons(): string[] {

    const reasons: string[] = [];

    if (this.hasItems(ChecklistService.ORGANISATION_LARGE_YES)) {
      reasons.push(`Omdat uw onderneming, bedrijf of organisatie meer dan 250 werknemers heeft, bent u verplicht een verwerkingsregister
        bij te houden.`);
    }

    if (this.hasItems(ChecklistService.PROCESSING_INCIDENTAL_NO)) {
      reasons.push(`De verwerkingen zijn niet incidenteel.`);
    }

    if (this.hasItems(ChecklistService.HIGH_RISK_YES)) {
      reasons.push(`U verwerkt persoonsgegevens met een hoog privacyrisico.`);
    }

    if (this.hasItems(ChecklistService.PROCESSING_SPECIAL_YES)) {
      reasons.push(`U verwerkt bijzondere persoonsgegevens.`);
    }

    return reasons;
  }
}

interface Item {
  key: string;
  value: boolean;
}
