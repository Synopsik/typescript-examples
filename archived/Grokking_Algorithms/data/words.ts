// String datasets for searching, sorting, and hash table exercises
// from Grokking Algorithms (2nd Edition).

// Sorted alphabetically - binary search on strings (Chapter 1).
export const sortedWords: string[] = [
    "apple", "banana", "cherry", "date", "elderberry",
    "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince",
    "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
    "watermelon", "xigua", "yam", "zucchini",
]

// Unsorted - useful for sorting exercises.
export const unsortedWords: string[] = [
    "quicksort", "merge", "binary", "hash", "graph",
    "dijkstra", "greedy", "dynamic", "recursion", "stack",
    "queue", "tree", "heap", "array", "linked",
]

// Voting/duplicates - useful for hash table counting (Chapter 5).
export const votes: string[] = [
    "tom", "mike", "mike", "annie", "tom", "annie", "mike",
    "tom", "mike", "annie", "annie", "tom", "mike", "tom",
    "annie", "mike", "tom", "tom", "annie", "mike",
]

// Word with repeated characters - character frequency / anagram exercises.
export const sampleText: string =
    "the quick brown fox jumps over the lazy dog the fox is quick"

// Cache/lookup demo - simple key/value pairs (Chapter 5 - hash tables).
export const phoneBook: Record<string, string> = {
    "alice": "555-0101",
    "bob": "555-0102",
    "charlie": "555-0103",
    "diana": "555-0104",
    "eric": "555-0105",
    "fiona": "555-0106",
}
