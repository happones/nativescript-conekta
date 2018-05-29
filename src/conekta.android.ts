//declare var io: any;
import * as application from 'tns-core-modules/application'

export class TNSConekta  {
   private conekta: any;

   constructor() {
      this.conekta = io.conekta.conektasdk.Conekta;
   }
    public setPublicKey(key: string) {
        this.conekta.setPublicKey(key)
    }

    public setLanguage(lang: string) {
        this.conekta.setLanguage(lang)
    }

    public createToken(params) {
        let name = params.name || 'name';
        let number = params.number || 'number';
        let cvc = params.cvc || 'cvc';
        let expiryMonth = params.expiry_month || 'month';
        let expiryYear = params.expiry_year || 'year';

        let card = new io.conekta.conektasdk.Card(name, number, cvc, expiryMonth, expiryYear);

        let token = new io.conekta.conektasdk.Token(this.getActivity())

        return new Promise((resolve, reject) => {
            token.onCreateTokenListener(new io.conekta.conektasdk.Token.CreateToken({
                onCreateTokenReady(response) {
                    let data = JSON.parse(response.toString())
                    if (data.object === 'error') {
                        reject(data)
                    } else {
                        resolve(data)
                    }
                }
            }))

            token.create(card)
        })

    }

    private getActivity(): any /* android.app.Activity */ {
        return application.android.foregroundActivity || application.android.startActivity;
    }
}
