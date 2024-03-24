

import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url';

const regex = /module\.exports = punycode;/;
const output = 'export { ucs2decode, ucs2encode, decode, encode, toASCII, toUnicode };\nexport default punycode;';
const dir = dirname(fileURLToPath(import.meta.url))

const sourceContents = fs.readFileSync(path.resolve(dir, '../punycode.js'), 'utf-8');

if (!regex.test(sourceContents)) {
	throw new Error('The underlying library has changed. Please update the prepublish script.');
}

const outputContents = sourceContents.replace(regex, output);

fs.writeFileSync(path.resolve(dir, '../punycode.es6.js'), outputContents);
