export function quickSort<T>(arr: T[]): T[] {
    if (arr.length < 2) return arr
    // Randomly select a pivot index
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    // Filter out the pivotIndex to get an array with the remaining elements
    const rest = arr.filter((_, i) => i !== pivotIndex)
    // Find values in rest that are less than or equal to the pivot
    const less = rest.filter(x => x <= pivot);
    // Find values in rest that are greater than the pivot
    const greater = rest.filter(x => x > pivot);
    // Recursively sort the less and greater arrays and concatenate them with the pivot
    return [...quickSort(less), pivot, ...quickSort(greater)];
}