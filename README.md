# Nativescript Conekta Sdk

This is the first version of the plugin, for the moment it only works on android and much to improve

## Installation

As soon as I can I'll upload it to npm in order to use the following command:

```javascript
tns plugin add nativescript-conekta
```
So while cloning from the repo
## Usage 


	
	```javascript
    import { Conekta } from 'nativescript-conekta'
    // or 
    const Conekta = require('native-script').Conekta
    
    private conekta: Conekta;
    
    this.conekta = new Conekta()
            this.conekta.setPublicKey('your_key')
            
    this.conekta.setLanguage('you_lang')// Optional default es
    
    this.conekta.createToken(params) // Promise, params is required, (name, number, cvc, exp_month, exp_year)
    
     ```)
    
## License

Apache License Version 2.0, January 2004
