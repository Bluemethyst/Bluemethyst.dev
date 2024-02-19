// types.ts or page.types.ts
export type RepoData = {
    owner: string;
    repo: string;
    link: string;
    description: string;
    image: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
    website?: string;
};
