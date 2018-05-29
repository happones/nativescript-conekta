import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function generateToken(args) {
    let object = args.object.bindingContext;
    let module  = new HelloWorldModel();
    module.conekta.createToken(object.card).then(response => {
        alert('success: ' + JSON.stringify(response));
        args.object.bindingContext.set('token', response.id)
    }, error => {
        alert('error: ' + JSON.stringify(error));
    })

}
