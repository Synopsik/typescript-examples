// Recursion / divide & conquer datasets (Chapters 3 & 4) from
// Grokking Algorithms (2nd Edition).

// Farm plot for the Euclid's algorithm example (Chapter 4):
// find the largest square that tiles a 1680 x 640 plot. Answer: 80.
export const farmPlot = { width: 1680, height: 640 }

// Small inputs for testing factorial / sum / count recursion exercises.
export const factorialInputs: number[] = [0, 1, 2, 3, 5, 7, 10]

// Nested array - useful for "sum of all numbers" or "max" recursion exercises.
export type NestedNumberArray = (number | NestedNumberArray)[]
export const nestedNumbers: NestedNumberArray = [
    1, [2, 3], 4, [5, [6, 7]], 8, [9, 10],
]

// Box-in-box puzzle for the recursion intro (Chapter 3).
// Represents nested boxes; only one of them contains the key.
export interface Box {
    contents: (Box | "key")[]
}

export const nestedBoxes: Box = {
    contents: [
        { contents: [{ contents: ["key"] }] },
        { contents: [] },
        { contents: [{ contents: [{ contents: [] }] }] },
    ],
}
