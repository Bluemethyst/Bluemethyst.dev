import type { RepoData } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const response = await fetch(
        "https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=Bluemethyst",
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: RepoData[] = await response.json();
    console.log(JSON.stringify(data, null, 2));
    return { data };
}) satisfies PageServerLoad;
