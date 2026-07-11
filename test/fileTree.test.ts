import { describe, expect, it } from "vitest";
import { walkDirBFS } from "../src/fileTree";

const utilWalk: Record<string, string[]> = {
    'util': [
        'util\\algorithms',
        'plotting.ts',
        'queue.ts',
        'random.ts',
        'sorted.ts'
    ],
    'util\\algorithms': [
        'binarySearch.ts',
        'quickSort.ts',
        'selectionSort.ts'
    ]
}

describe('walkDir', () => {
    it("Walk the util folder", () => {
        expect(walkDirBFS("util")).toStrictEqual(utilWalk);
    })
});


