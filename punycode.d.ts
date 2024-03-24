declare function ucs2decode(string:string):Array<number>;
declare function ucs2encode(array:Array<number>):string;
declare function decode(string:string):string;
declare function encode(string:string):string;
declare function toASCII(string:string):string;
declare function toUnicode(string: string): string;

interface Punycode {
	'version': '2.3.1';
	'ucs2': {
		'decode': typeof ucs2decode;
		'encode': typeof ucs2encode;
	},
	'decode': typeof decode;
	'encode': typeof encode;
	'toASCII': typeof toASCII;
	'toUnicode': typeof toUnicode;
}

declare const punycode: Punycode;

export default punycode;
