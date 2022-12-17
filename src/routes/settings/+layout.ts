import { redirect, type LoadEvent } from "@sveltejs/kit"

export const load = (async (e : LoadEvent) => {
    if (e.url.pathname === '/settings')
        throw redirect(301, '/settings/profile')
})