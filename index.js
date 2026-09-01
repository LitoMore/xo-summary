#!/usr/bin/env node

import process from 'node:process';
import {stripVTControlCharacters} from 'node:util';

const errors = {};

if (process.stdin.isTTY) {
	console.log('\nTo use this module, pipe output from `xo` into it:\n\nxo | xo-summary');
	process.exit(1);
}

const isNameOnlyMode = process.argv.includes('--name-only');

process.stdin.setEncoding('utf8');

let input = '';
for await (const chunk of process.stdin) {
	input += chunk;
}

for (let line of input.split('\n')) {
	line = stripVTControlCharacters(line);
	const linePrefix = /^\s*\S\s+\d+:\d+\s+/v.exec(line);
	if (!linePrefix) {
		continue;
	}

	const description = line.slice(linePrefix[0].length).trimEnd();
	const ruleSeparatorIndex = description.lastIndexOf('  ');

	let error = description;
	if (ruleSeparatorIndex !== -1) {
		error = isNameOnlyMode
			? description.slice(ruleSeparatorIndex + 2).trimStart()
			: description.slice(0, ruleSeparatorIndex).trimEnd();
	}

	const count = errors[error] || 0;
	errors[error] = count + 1;
}

for (const error of Object.keys(errors)
	.toSorted((a, b) => errors[b] - errors[a])) {
	const count = errors[error];
	console.log(String(count).padEnd(6, ' '), error);
}
