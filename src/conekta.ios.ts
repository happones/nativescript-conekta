import * as application from 'tns-core-modules/application';

export class TNSConekta {

    private conekta: any;

    constructor () {
        this.conekta = new Conekta();
        this.conekta.baseURI = 'https://api.conekta.io'
    }

    setPublicKey(key:string)  {
        this.conekta.publicKey = key;
    }

    createToken(params) {

        return new Promise((resolve, reject) => {
            let name = params.name || '';
            let number = params.number || '';
            let cvc = params.cvc || '';
            let expiryMonth = params.expiry_month || '';
            let expiryYear = params.expiry_year || '';

            let card = new Card({
                number: number,
                name: name,
                cvc: cvc,
                expMonth: expiryMonth,
                expYear: expiryYear
            });

            card.deviceFingerprint = this.conekta.deviceFingerprint()
            card.asJSONData()

            let token = new Token({
                card: card
            });

            token.baseURI = this.conekta.baseURI;
            token.resourceURI = "/tokens";
            token.publicKey = this.conekta.publicKey;
            token.apiKeyBase64(this.conekta.publicKey);

            token.createWithSuccessAndError(success => {
                let data = this.parseJson(success);
                if (data.object === 'error') {
                    reject(data)
                } else {
                    resolve(data)
                }
                resolve(this.parseJson(success))
            }, error => {
                reject(this.parseJson(error))
            })
        })
    }

    parseJson(object) {
        let keys = object.allKeys.componentsJoinedByString(',').split(',');
        let data = {
            object: null
        };
        keys.forEach( key => {
            data[key] = object.valueForKey(key)
        });

        return data;
    }
}
