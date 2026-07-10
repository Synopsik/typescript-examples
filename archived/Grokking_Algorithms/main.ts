// import { functionTimer } from "./util/timing";
// import { sortedPeople, unsortedPeople } from "./data";
// import { sortedNumbers, unsortedNumbers } from "./data";
import { binarySearch } from "./01_Intro_To_Algs/binary_search";
// import { selectionSort } from "./02_selection_sort/selection_sort";
// import { quicksort } from "./04_quicksort/quicksort";
//import { plotData } from "./util/graphs";
import {averageCase} from "./util/graphs";
import {randomArray, randomInt} from "./util/random";


/*     Binary Search     */
averageCase(
    binarySearch,
    (size): [number[], number] => {
        const arr = randomArray(
            size,
            1,
            100
        ).sort(
            (a, b) => a - b
        );
        const item = arr[randomInt(0, arr.length - 1)];
        return [arr, item];
    },
);

//
// const [,time1,] = functionTimer(binarySearch, [sortedNumbers, 25])
// const [,time2,] = functionTimer(binarySearch, [sortedNumbers, 6])
// const [,time3,] = functionTimer(binarySearch, [sortedPeople, "Steven Baar"])
//
// /*      Selection Sort    */
// const [,,resultPeople] = functionTimer(selectionSort, [unsortedPeople]);
// const [,,resultNumbers] = functionTimer(selectionSort, [unsortedNumbers]);
// const [,time4,] = functionTimer(binarySearch, [resultNumbers, 25]);
// const [,time5,] = functionTimer(binarySearch, [resultNumbers, 6]);
// const [,time6,] = functionTimer(binarySearch, [resultPeople, "Steven Baar"]);
//
// /*       Quick Sort    */
// const [,time7,] = functionTimer(quicksort, [unsortedNumbers]);
// const [,time8,] = functionTimer(quicksort, [sortedNumbers]);
