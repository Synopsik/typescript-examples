export function quicksort<T>(arr: T[]): T[] {
    if (arr.length < 2) return arr

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const rest = arr.filter((_, i) => i !== pivotIndex)

    const less = rest.filter(x => x <= pivot);
    const greater = rest.filter(x => x > pivot);
    return [...quicksort(less), pivot, ...quicksort(greater)];
}