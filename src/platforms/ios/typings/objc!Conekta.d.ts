
declare class Card extends NSObject {

	static alloc(): Card; // inherited from NSObject

	static new(): Card; // inherited from NSObject

	baseURI: string;

	cvc: string;

	deviceFingerprint: string;

	expMonth: string;

	expYear: string;

	name: string;

	number: string;

	publicKey: string;

	resourceURI: string;

	constructor(o: { number: string; name: string; cvc: string; expMonth: string; expYear: string; });

	asJSONData(): NSData;

	initWithNumberNameCvcExpMonthExpYear(number: string, name: string, cvc: string, expMonth: string, expYear: string): this;

	setNumberNameCvcExpMonthExpYear(number: string, name: string, cvc: string, expMonth: string, expYear: string): void;
}

declare class Conekta extends NSObject {

	static alloc(): Conekta; // inherited from NSObject

	static new(): Conekta; // inherited from NSObject

	baseURI: string;

	delegate: UIViewController;

	publicKey: string;

	Card(): Card;

	Token(): Token;

	collectDevice(): void;

	deviceFingerprint(): string;
}

declare var ConektaVersionNumber: number;

declare var ConektaVersionString: interop.Reference<number>;

declare class Connection extends NSObject implements NSURLSessionDelegate {

	static alloc(): Connection; // inherited from NSObject

	static new(): Connection; // inherited from NSObject

	apiKey: string;

	requestor: NSMutableURLRequest;

	url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { request: NSMutableURLRequest; });

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRequest(request: NSMutableURLRequest): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestWithSuccessAndError(successHandler: (p1: NSDictionary<any, any>) => void, errorHandler: (p1: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class Token extends NSObject {

	static alloc(): Token; // inherited from NSObject

	static new(): Token; // inherited from NSObject

	baseURI: string;

	card: Card;

	deviceFingerprint: string;

	publicKey: string;

	resourceURI: string;

	constructor(o: { card: Card; });

	apiKeyBase64(api_key: string): string;

	createWithSuccessAndError(successHandler: (p1: NSDictionary<any, any>) => void, errorHandler: (p1: NSError) => void): void;

	initWithCard(card: Card): this;

	setCard(card: Card): void;
}
