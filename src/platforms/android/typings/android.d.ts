/// <reference path="./_helpers.d.ts" />
declare module io {
    export module conekta {
        export module conektasdk {
            export class BuildConfig {
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module conekta {
        export module conektasdk {
            export class Card {
                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
                public getExpYear(): string;
                public getName(): string;
                public getExpMonth(): string;
                public getNumber(): string;
                public getCvc(): string;
            }
        }
    }
}

import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module conekta {
        export module conektasdk {
            export abstract class Conekta {
                public static setApiVersion(param0: string): void;
                public static getPublicKey(): string;
                public static deviceFingerPrint(param0: androidappActivity): string;
                public static getLanguage(): string;
                public static setLanguage(param0: string): void;
                public static setPublicKey(param0: string): void;
                public static getApiVersion(): string;
                public static collectDevice(param0: androidappActivity): void;
                public constructor();
                public static getBaseUri(): string;
            }
        }
    }
}

import javautilList = java.util.List;
import javalangVoid = java.lang.Void;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
    export module conekta {
        export module conektasdk {
            export class Connection {
                public request(param0: javautilList, param1: string): void;
                public onRequestListener(param0: io.conekta.conektasdk.Connection.Request): void;
                public constructor();
            }
            export module Connection {
                export class Request {
                    /**
                     * Constructs a new instance of the io.conekta.conektasdk.Connection$Request interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onRequestReady(param0: string): void;
                    });
                    public onRequestReady(param0: string): void;
                }
                export class Task {
                    public onPreExecute(): void;
                    public doInBackground(param0: native.Array<javalangVoid>): string;
                    public onPostExecute(param0: string): void;
                }
            }
        }
    }
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./io.conekta.conektasdk.Card.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module io {
    export module conekta {
        export module conektasdk {
            export class Token {
                public constructor(param0: androidappActivity);
                public create(param0: io.conekta.conektasdk.Card): void;
                public onCreateTokenListener(param0: io.conekta.conektasdk.Token.CreateToken): void;
                public constructor();
            }
            export module Token {
                export class CreateToken {
                    /**
                     * Constructs a new instance of the io.conekta.conektasdk.Token$CreateToken interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onCreateTokenReady(param0: orgjsonJSONObject): void;
                    });
                    public onCreateTokenReady(param0: orgjsonJSONObject): void;
                }
            }
        }
    }
}
