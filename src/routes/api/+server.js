import { query } from '$lib/index.js';
import { json } from '@sveltejs/kit';

export async function GET(event) {
	const q = query(event, 'q');
	return json({ query: q, result: malangis(q) });
}

/**
 * @param {string} text
 */
function malangis(text) {
	return text
		.split(/[\s]/g)
		.map((word) =>
			word
				.split('-')
				.map((chunk) =>
					chunk
						.replace('ng', 'gn')
						.replace(
							/[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ]l[aAiIuUeEoO]/g,
							(sub) => sub[0] + sub.slice(1).split('').reverse().join('')
						)
						.split('')
						.reverse()
						.join('')
				)
				.join('-')
		)
		.join(' ');
}
