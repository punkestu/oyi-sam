/**
 * @param {import("@sveltejs/kit").RequestEvent} event
 * @param {string} key
 * @returns {string}
 */
export function query(event, key) {
	return event.url.searchParams.get(key) || '';
}

// /**
//  * @param {string[]} value
//  * @returns {string | string[] | null}
//  */
// function congest(value) {
// 	return value.length > 0 ? (value.length > 1 ? value : value[0] ? value[0] : null) : null;
// }
