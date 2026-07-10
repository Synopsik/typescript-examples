export function binarySearch<T>(arr: T[], item: T): number {
    let low: number = 0;
    let high: number = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1; // Something failed if this runs
}



