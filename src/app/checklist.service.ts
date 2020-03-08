import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

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

  /** You can proof that consent was given */
  public static PROCESSING_ALLOWED_PERMISSION_YES = 'PROCESSING_ALLOWED_PERMISSION_YES';

  /** You cannot proof that consent was given */
  public static PROCESSING_ALLOWED_PERMISSION_NO = 'PROCESSING_ALLOWED_PERMISSION_NO';

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

  public static KNOWLEDGE_DATA_BREACH_YES = 'KNOWLEDGE_DATA_BREACH_YES';

  public static KNOWLEDGE_DATA_BREACH_NO = 'KNOWLEDGE_DATA_BREACH_NO';

  public static INFORMS_SUBJECT_YES = 'INFORMS_SUBJECT_YES';

  public static INFORMS_SUBJECT_NO = 'INFORMS_SUBJECT_NO';

  protected checklist: {[key: string]: boolean} = {};

  constructor() { }

  public setItem(key: string, value: boolean = true) {
    this.checklist[key] = value;
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
}
