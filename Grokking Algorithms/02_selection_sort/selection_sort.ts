export function selectionSort<T>(arr: T[]) {
    const newArr = [];
    const copiedArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        const smallest = findSmallest(copiedArr);
        newArr.push(
            copiedArr.splice(smallest, 1)[0]
        );
    }
    return newArr;
}

function findSmallest<T>(arr: T[]): number {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex
}

