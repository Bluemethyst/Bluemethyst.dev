<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData[];
    let repos = data;
</script>

<head>
    <meta charset="utf-8" />
    <title>Bluemethyst</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<div class="navbar">
    <nav>
        <a href="https://docs.bluemethyst.dev" target="_blank">Docs</a>
    </nav>
</div>
<div class="main">
    <h1>Bluemethyst</h1>
    <h3>
        Video Editor. Tech Support. Gamer. Coder; Python, HTML, CSS, Javascript
        + more.
    </h3>
    <div id="buttons-div">
        <button type="button">Github</button>
        <button type="button">Discord</button>
    </div>
    <h4>Have a look at some of my completed projects.</h4>
</div>
<div class="projects">
    {#each repos as repo (repo.repo)}
        <div class="project">
            <h2>{repo.repo}</h2>
            <p>{repo.description}</p>
            <a href={repo.link} target="_blank">
                <img src={repo.image} alt={repo.repo} />
            </a>
            <p>Language: {repo.language}</p>
            <p>Stars: {repo.stars}</p>
            <p>Forks: {repo.forks}</p>
            {#if repo.website}
                <a href={repo.website} target="_blank">Website</a>
            {/if}
        </div>
    {/each}
</div>
<div id="footer">
    <a href="https://discord.gg/Sc6Es7QnhH" target="_blank">
        <img
            src="/discord-logo.png"
            alt="Discord Logo"
            style="width: 30px; height: 22px;"
        />
    </a>
    <a href="https://github.com/Bluemethyst/" target="_blank">
        <img
            src="/github-logo.png"
            alt="Github Logo"
            style="width: 30px; height: 30px;"
        />
    </a>
    <a href="https://ko-fi.com/bluemethyst_exe" target="_blank">
        <img
            src="/kofi-logo.png"
            alt="Patreon Logo"
            style="width: 40px; height: 30px;"
        />
    </a>
</div>
