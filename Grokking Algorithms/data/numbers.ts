// Numeric datasets for sorting, searching, and other algorithmic exercises
// from Grokking Algorithms (2nd Edition).

// Already sorted - useful for binary search examples (Chapter 1).
export const sortedNumbers: number[] = [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
    21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
    83, 89, 97, 101, 103, 107, 109, 113,
]

// Unsorted - useful for selection sort (Chapter 2) and quicksort (Chapter 4).
export const unsortedNumbers: number[] = [
    42, 7, 19, 88, 3, 56, 71, 24, 95, 11,
    63, 38, 82, 5, 47, 29, 14, 76, 91, 50,
]

// Small array - quick demonstrations and base-case testing.
export const smallNumbers: number[] = [5, 2, 8, 1, 9, 3]

// Array with duplicates - tests stability and edge cases.
export const numbersWithDuplicates: number[] = [
    4, 1, 7, 4, 2, 9, 1, 7, 3, 4, 2, 9, 5,
]

// Reverse sorted - worst case for some sorting algorithms.
export const reverseSortedNumbers: number[] = [
    100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
]

// Large array - useful to compare O(n) vs O(log n) vs O(n^2) performance.
export const largeNumbers: number[] = Array.from(
    { length: 1000 },
    (_, i) => ((i * 2654435761) % 1000),
)

// Negative + positive integers - edge case coverage.
export const mixedSignNumbers: number[] = [
    -50, -23, -1, 0, 1, 7, 14, -8, 22, -34, 41, -17,
]
