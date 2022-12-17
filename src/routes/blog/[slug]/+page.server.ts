import type { LoadEvent } from "@sveltejs/kit";
import fs from 'fs'

export const load = async ({params}: LoadEvent) => {
    const data = fs.readFileSync('src/contents/hello.md', {encoding: 'utf-8'})
    console.log(data)
    return {
        content: data,
    };
};