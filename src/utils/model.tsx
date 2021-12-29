interface Card {
    name: string,
    cat: string, // cat -> categories
    technologies: string,
    description: string,
    rankId: number,
    rating: number,
    links: unknown[],
}

export type { Card }