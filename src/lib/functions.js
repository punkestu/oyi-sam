/**
 * @param {string} text
 */
export function malangis(text) {
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
