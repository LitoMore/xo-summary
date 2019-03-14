#!/usr/bin/env node

const concat = require('concat-stream');
const pad = require('pad');
const stripAnsi = require('strip-ansi');

const errors = {};

if (process.stdin.isTTY) {
	console.log('\nTo use this module, pipe output from `xo` into it:\n\nxo | xo-summary');
	process.exit(1);
}

process.stdin.pipe(concat(buffer => {
	buffer
		.toString()
		.split('\n')
		.forEach(line => {
			line = stripAnsi(line);
			if (!line || !line.match(/\s+\d+:\d+\s+/)) {
				return;
			}

			const error = line.split(/\s+\d+:\d+\s+/)[1].replace(/\s+\S+$/, '');
			const count = errors[error] || 0;
			errors[error] = count + 1;
		});

	Object.keys(errors)
		.sort((a, b) => errors[b] - errors[a])
		.forEach(error => {
			const count = errors[error];
			console.log(pad(String(count), 6), error);
		});
}));
