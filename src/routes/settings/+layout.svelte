<script lang="ts">
	import { page } from '$app/stores';
	const linkClass = 'border border-gray-400 text-lg mb-2';
	const links = [
		{
			link: '/settings/profile',
			name: 'Profile'
		},
		{
			link: '/settings/account',
			name: 'Account'
		},
		{
			link: '/settings/appearance',
			name: 'Appearance'
		}
	];
</script>

<div class="flex flex-row">
	<div class="flex-none">
		<ul class="menu p-4 w-80 bg-base-100 text-base-content border-r-2 border-r-gray-400 h-screen">
			{#each links as link (link.link)}
				<li class={linkClass}>
					<a
						class="block p-2 w-full h-full {$page.url.pathname === link.link ? 'bg-blue-400' : ''}"
						href={link.link}>{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex-none">
		<slot />
	</div>
</div>
