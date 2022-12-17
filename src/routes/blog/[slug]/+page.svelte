<script>
	// @ts-ignore
	import { marked } from 'marked';
	/**
	 * @type {{ content: any; }}
	 */
	export let data;
	const content = marked.parse(data.content);
</script>

<main class="m-5 flex justify-center">
	<article class="prose">
		{@html content}
	</article>
</main>
