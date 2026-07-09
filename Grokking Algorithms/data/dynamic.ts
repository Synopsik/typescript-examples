// Dynamic programming datasets (Chapter 9) from Grokking Algorithms (2nd Edition).

export interface Item {
    name: string
    weight: number
    value: number
}

// Classic knapsack example from the book.
// Knapsack capacity: 4 lbs. Optimal value: 35 (guitar + laptop).
export const knapsackItems: Item[] = [
    { name: "guitar", weight: 1, value: 15 },
    { name: "stereo", weight: 4, value: 30 },
    { name: "laptop", weight: 3, value: 20 },
]
export const knapsackCapacity = 4

// Extended knapsack - more items, larger capacity.
export const biggerKnapsackItems: Item[] = [
    { name: "guitar", weight: 1, value: 1500 },
    { name: "stereo", weight: 4, value: 3000 },
    { name: "laptop", weight: 3, value: 2000 },
    { name: "iphone", weight: 1, value: 2000 },
    { name: "necklace", weight: 1, value: 1000 },
    { name: "mp3player", weight: 1, value: 1000 },
]
export const biggerKnapsackCapacity = 6

// Longest common substring/subsequence (Chapter 9).
export const lcsPairs: { a: string; b: string }[] = [
    { a: "hish", b: "fish" },
    { a: "hish", b: "vista" },
    { a: "blue", b: "clues" },
    { a: "fort", b: "fosh" },
    { a: "fish", b: "fosh" },
]
