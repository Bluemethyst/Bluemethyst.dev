<template>
    <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item">
                <RouterLink to="/">[home]</RouterLink>
            </li>
            <li class="nav-item">
                <a href="https://github.com/Bluemethyst" target="_blank"
                    >[projects]</a
                >
            </li>
            <li class="nav-item">
                <RouterLink to="/experience">[experience]</RouterLink>
            </li>

            <li class="nav-item">
                <RouterLink to="/contact">[contact]</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style scoped>
@import url("/src/assets/base.css");

.navbar {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.nav-list {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}

.nav-item {
    margin: 0 1rem;
}

.nav-item a {
    color: var(--text-color);
    text-decoration: none;
    font-family: var(--font-family);
    font-size: 1.2rem;
    transition: color 0.3s;
}

.nav-item a:hover {
    color: var(--accent-color);
}

@media (max-width: 600px) {
    .nav-item {
        flex: 1 1 20%;
        text-align: center;
    }
}
</style>
