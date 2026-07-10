// K-Nearest Neighbors datasets (Chapter 10) from Grokking Algorithms (2nd Edition).

// Fruit classifier - features: [redness, size].
// Label "apple" or "orange". Useful for the classic KNN classification demo.
export interface FruitSample {
    features: [number, number]  // [redness 0-10, size 0-10]
    label: "apple" | "orange"
}

export const fruitTrainingSet: FruitSample[] = [
    { features: [9, 3], label: "apple" },
    { features: [8, 4], label: "apple" },
    { features: [7, 3], label: "apple" },
    { features: [8, 5], label: "apple" },
    { features: [10, 4], label: "apple" },
    { features: [2, 8], label: "orange" },
    { features: [3, 9], label: "orange" },
    { features: [4, 7], label: "orange" },
    { features: [2, 9], label: "orange" },
    { features: [3, 8], label: "orange" },
]

export const fruitToClassify: [number, number][] = [
    [9, 4],   // expected apple
    [3, 8],   // expected orange
    [6, 6],   // borderline
]

// Movie-recommendation rating matrix.
// Rows are users, columns are movies (rated 1-5, 0 means unrated).
export const movieTitles: string[] = [
    "Inception", "TheMatrix", "Interstellar",
    "Titanic", "TheNotebook", "LaLaLand",
]

export const userRatings: Record<string, number[]> = {
    priyanka: [5, 5, 4, 1, 2, 2],
    justin:   [4, 5, 5, 2, 1, 2],
    morpheus: [5, 5, 5, 1, 1, 1],
    lea:      [1, 2, 2, 5, 5, 4],
    adit:     [2, 2, 1, 5, 4, 5],
    // user "you" we want to recommend movies for:
    you:      [4, 5, 0, 2, 1, 0],
}

// Simple regression dataset - predict a number from features.
// Features: [num_bedrooms, square_feet_x100]. Target: price in $1000s.
export interface HouseSample {
    features: [number, number]
    price: number
}

export const housePrices: HouseSample[] = [
    { features: [2, 8],  price: 180 },
    { features: [3, 12], price: 270 },
    { features: [3, 15], price: 320 },
    { features: [4, 18], price: 400 },
    { features: [4, 22], price: 460 },
    { features: [5, 25], price: 540 },
]
