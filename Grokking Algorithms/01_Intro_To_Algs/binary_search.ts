import { peopleList } from "../data/people";
function binarySearch(arr: number[], item: number): number {
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

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 9));
console.log(binarySearch(myList, 6));

console.log(binarySearch(peopleList, "Steven Baar"))


