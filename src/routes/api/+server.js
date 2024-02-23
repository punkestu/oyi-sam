import { query } from '$lib/index.js';
import { malangis } from '$lib/functions.js';
import { json } from '@sveltejs/kit';

export async function GET(event) {
	const q = query(event, 'q');
	return json({ query: q, result: malangis(q) });
}
