import { Observable } from 'tns-core-modules/data/observable';
import { Conekta } from 'nativescript-conekta';

export class HelloWorldModel extends Observable {
  public conekta: Conekta;
  private card = {
    name: 'John Doe',
      number: '4242424242424242',
      cvc: '123',
      expiry_month: '10',
      expiry_year: '22'
  };

  public token: string = ''

  constructor() {
    super();
    this.conekta = new Conekta();
    // set apikey for conekta
    this.conekta.setPublicKey('your_key')
      // ser language
      // this.conekta.setLanguage('you_lang')// Optional
  }

}
