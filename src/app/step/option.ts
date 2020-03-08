/**
 * The option class
 */
export class Option {

  /**
   * The key of the option
   *
   * If the option is checked, an item with this name will be set to `true` in the ChecklistService
   */
  key: string;

  /**
   * The name of the option
   *
   * This is placed next to the checkbox/radio button
   */
  name: string;

  /**
   * Whether this is an exclusive option
   *
   * If the option is marked as exclusive, it will automatically be unchecked if any other option is selected. It will also automatically
   * uncheck all other options if this option is checked.
   */
  exclusive: boolean;

  /**
   * @param key The key of the option, will be used for the checklist item
   * @param name The (display) name of the option
   * @param exclusive Whether this is an exclusive option or not
   */
  constructor(key: string, name: string, exclusive: boolean = false) {
    this.exclusive = exclusive;
    this.key = key;
    this.name = name;
  }
}
