import { Common } from './conekta.common';

export class VersionNumber {
    get() {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
}
