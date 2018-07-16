# Nativescript Conekta Sdk

Works on ios and android

## Installation

Install with following command:

```
tns plugin add nativescript-conekta-sdk
// or
npm i nativescript-conekta-sdk
```
So while cloning from the repo

![NativeScript demo android](https://github.com/happones/nativescript-conekta/blob/master/screenshots/android.png?raw=true)

![NativeScript demo ios](https://github.com/happones/nativescript-conekta/blob/master/screenshots/ios.png?raw=true)
## Usage
TypeScript
```Typescript
import { TNSConekta } from 'nativescript-conekta-sdk'

private conekta: TNSConekta;

this.conekta = new TNSConekta()

this.conekta.setPublicKey('your_key')


this.conekta.createToken(params) // Promise, params is required, (name, number, cvc, exp_month, exp_year)

```
JavaScript
```Javascript
const TNSConekta = require('nativescript-conekta-sdk').TNSConekta;

const conekta = new TNSConekta()

conekta.setPublicKey('your_key')
conekta.setLanguage('en') // only in android
conekta.createToken(params) // Promise, params is required, (name, number, cvc, exp_month, exp_year)

```

Handle errors

JavaScript
```Javascript
conekta.createToken(params).then(success => {
    // your success function
}).catch(error => {
    alert(error.message_to_purchaser)
}) // Promise, params is required, (name, number, cvc, exp_month, exp_year)

```

**Wants card validation**

Use this plugin [Credit Card Validator ](https://github.com/braintree/card-validator)

## License

Apache License Version 2.0, January 2004
