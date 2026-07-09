import { functionTimer } from "./util/timing";
import { sortedPeople, unsortedPeople } from "./data";
import { sortedNumbers, unsortedNumbers } from "./data";
import { binarySearch } from "./01_Intro_To_Algs/binary_search";
import { selectionSort } from "./02_selection_sort/selection_sort";
import { quicksort } from "./04_quicksort/quicksort";

/*     Binary Search     */
functionTimer(binarySearch, [sortedNumbers, 25])
functionTimer(binarySearch, [sortedNumbers, 6])
functionTimer(binarySearch, [sortedPeople, "Steven Baar"])

/*      Selection Sort    */
const [,,resultPeople] = functionTimer(selectionSort, [unsortedPeople]);
const [,,resultNumbers] = functionTimer(selectionSort, [unsortedNumbers]);
functionTimer(binarySearch, [resultNumbers, 25]);
functionTimer(binarySearch, [resultNumbers, 6]);
functionTimer(binarySearch, [resultPeople, "Steven Baar"]);

/*       Quick Sort    */
functionTimer(quicksort, [unsortedNumbers]);
functionTimer(quicksort, [sortedNumbers]);





