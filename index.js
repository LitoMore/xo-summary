#!/usr/bin/env node

import process from 'node:process';
import concat from 'concat-stream';
import stripAnsi from 'strip-ansi';

const errors = {};

if (process.stdin.isTTY) {
	console.log('\nTo use this module, pipe output from `xo` into it:\n\nxo | xo-summary');
	process.exit(1);
}

const isNameOnlyMode = process.argv.includes('--name-only');

process.stdin.pipe(concat(buffer => {
	for (let line of buffer
		.toString()
		.split('\n')) {
		line = stripAnsi(line);
		if (!line || !/\s+\d+:\d+\s+/.test(line)) {
			continue;
		}

		const error = line.split(/\s+\d+:\d+\s+/)[1].replace(isNameOnlyMode ? /^.+\s{2,}/ : /\s+\S+$/, '');
		const count = errors[error] || 0;
		errors[error] = count + 1;
	}

	for (const error of Object.keys(errors)
		.sort((a, b) => errors[b] - errors[a])) {
		const count = errors[error];
		console.log(String(count).padEnd(6, ' '), error);
	}
}));
