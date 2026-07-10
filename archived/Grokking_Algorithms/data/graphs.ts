// Graph datasets for BFS (Chapter 6), Dijkstra's algorithm (Chapter 7),
// and other graph exercises from Grokking Algorithms (2nd Edition).

// Unweighted, directed adjacency list - BFS "mango seller" example (Chapter 6).
// Find the shortest chain from "you" to a mango seller (name ending in "m").
export const mangoSellerGraph: Record<string, string[]> = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
}

// Weighted, directed graph - Dijkstra's algorithm (Chapter 7).
// Cheapest path from "start" to "fin" (classic book example: 6).
export const weightedGraph: Record<string, Record<string, number>> = {
    start: { a: 6, b: 2 },
    a: { fin: 1 },
    b: { a: 3, fin: 5 },
    fin: {},
}

// Costs table seeded for the Dijkstra example above.
export const dijkstraCosts: Record<string, number> = {
    a: 6,
    b: 2,
    fin: Infinity,
}

// Parents table seeded for the Dijkstra example above.
export const dijkstraParents: Record<string, string | null> = {
    a: "start",
    b: "start",
    fin: null,
}

// Larger weighted graph - extra practice.
export const cityGraph: Record<string, Record<string, number>> = {
    seattle: { portland: 174, spokane: 280 },
    portland: { seattle: 174, boise: 430, sanfrancisco: 635 },
    spokane: { seattle: 280, boise: 410 },
    boise: { portland: 430, spokane: 410, saltlake: 340 },
    sanfrancisco: { portland: 635, losangeles: 380 },
    losangeles: { sanfrancisco: 380, lasvegas: 270 },
    lasvegas: { losangeles: 270, saltlake: 420 },
    saltlake: { boise: 340, lasvegas: 420 },
}

// Simple unweighted undirected graph - BFS / connected-component practice.
export const socialGraph: Record<string, string[]> = {
    alice: ["bob", "carol"],
    bob: ["alice", "david", "eve"],
    carol: ["alice", "frank"],
    david: ["bob"],
    eve: ["bob", "frank"],
    frank: ["carol", "eve", "george"],
    george: ["frank"],
}
