<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    let repo_data = data.repos;
</script>

<div class="navbar">
    <nav>
        <a class="header-items" href="/">Home</a>
        <a
            class="header-items"
            href="https://docs.bluemethyst.dev"
            target="_blank">Docs</a
        >
        <a
            class="header-items"
            href="https://github.com/Bluemethyst"
            target="_blank">Github</a
        >
    </nav>
</div>
<div class="main">
    <h1>Bluemethyst</h1>
    <h3>
        Video Editor. Tech Support. Gamer. Coder; Python, HTML, CSS, Javascript
        + more.
    </h3>
    <div id="buttons-div">
        <a href="https://github.com/Bluemethyst" target="_blank">
            <button class="button" type="button">Github</button>
        </a>
        <a href="https://discord.gg/Sc6Es7QnhH" target="_blank">
            <button class="button" type="button">Discord</button>
        </a>
    </div>
    <h4>Have a look at some of my completed projects.</h4>
</div>
<div class="projects">
    {#each repo_data as repo (repo.repo)}
        <a href={repo.link} target="_blank">
            <div class="project" style="--line-color: {repo.languageColor};">
                <img src={repo.image} alt={repo.repo} />
                <h2>{repo.repo}</h2>
                <p>{repo.description}</p>
                <p>Language: {repo.language}</p>
                <p>Stars: {repo.stars}</p>
                <p>Forks: {repo.forks}</p>
            </div>
        </a>
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
