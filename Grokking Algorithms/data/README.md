# Test data for *Grokking Algorithms* (2nd Edition)

Datasets you can import into your algorithm exercises and tests.
All datasets compile under `tsc --strict`.

| File | Chapter(s) | What's inside |
| --- | --- | --- |
| `people.ts` | 1 - Binary Search | `unsortedPeople`, `sortedPeople`, `sortedFirstNames`, `peopleById`, `peopleByName` |
| `numbers.ts` | 1, 2, 4 - Search & Sort | sorted / unsorted / duplicates / reverse / large / mixed-sign arrays |
| `words.ts` | 1, 5 - Search & Hash Tables | sorted/unsorted words, voting list, sample text, `phoneBook` |
| `recursion.ts` | 3, 4 - Recursion & D&C | factorial inputs, nested boxes, nested number arrays, Euclid farm plot |
| `graphs.ts` | 6, 7 - BFS & Dijkstra | `mangoSellerGraph`, `weightedGraph`, `cityGraph`, `socialGraph` |
| `greedy.ts` | 8 - Greedy | radio-station set cover, classroom scheduling |
| `dynamic.ts` | 9 - Dynamic Programming | knapsack items, LCS pairs |
| `knn.ts` | 10 - K-Nearest Neighbors | fruit classification, movie ratings, house-price regression |

## Usage

```ts
// Import individual modules:
import { sortedNumbers } from "../data/numbers"
import { mangoSellerGraph } from "../data/graphs"

// Or use the barrel:
import { sortedNumbers, mangoSellerGraph, knapsackItems } from "../data"
```
