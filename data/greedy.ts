// Greedy algorithm datasets (Chapter 8) from Grokking Algorithms (2nd Edition).

// Set-covering problem: choose the minimum number of radio stations
// that cover all desired states.
export const statesNeeded: Set<string> = new Set([
    "mt", "wa", "or", "id", "nv", "ut", "ca", "az",
])

export const radioStations: Record<string, Set<string>> = {
    kone: new Set(["id", "nv", "ut"]),
    ktwo: new Set(["wa", "id", "mt"]),
    kthree: new Set(["or", "nv", "ca"]),
    kfour: new Set(["nv", "ut"]),
    kfive: new Set(["ca", "az"]),
}

// Classroom-scheduling greedy example: pick maximum non-overlapping classes.
export interface ClassSlot {
    name: string
    start: number  // 24-hour time
    end: number
}

export const classSchedule: ClassSlot[] = [
    { name: "art", start: 9, end: 10 },
    { name: "english", start: 9.5, end: 10.5 },
    { name: "math", start: 10, end: 11 },
    { name: "computerscience", start: 10.5, end: 11.5 },
    { name: "music", start: 11, end: 12 },
]
