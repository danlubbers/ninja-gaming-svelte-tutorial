import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params: { slug } }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
	const guide = await res.json();

	if (res.ok) {
		return {
			props: {
				guide
			}
		};
	} else {
		throw redirect(307, '/guides');
	}
}
