import { bench, describe } from "vitest";
import { binarySearch } from "../src/algorithms/binarySearch";
import { makeSimpleSortedArray } from "../util/sorted";

describe("binarySearch", () => {
    for (const size of [10, 100, 1_000, 10_000, 100_000, 1_000_000]) {
        const arr = makeSimpleSortedArray(size);

        bench(`size=${size}, first`, () => {
            binarySearch(arr, 0);
        });

        bench(`size=${size}, middle`, () => {
            binarySearch(arr, Math.floor(size / 2));
        });

        bench(`size=${size}, last`, () => {
            binarySearch(arr, size - 1);
        });

        bench(`size=${size}, missing`, () => {
            binarySearch(arr, -1);
        });
    }
});


