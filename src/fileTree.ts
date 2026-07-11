import * as fs from "fs";
import * as path from "path";
import {Queue} from "../util/queue";
import { quickSort } from "../util/algorithms/quickSort";
import { DirectoryTree } from "./types";


export function walkDirBFS(dir: string): DirectoryTree {
    const queue = new Queue<string>();
    const dirTree: DirectoryTree = {}
    queue.enqueue([dir]);
    while (!queue.isEmpty) {
        const dir = queue.dequeue() ?? "./";
        for (const file of quickSort(fs.readdirSync(dir))) {
            const fullPath = path.join(dir, file)
            const currFiles = dirTree[dir] ?? [];
            if (fs.statSync(fullPath).isFile()) {
                dirTree[dir] = [...currFiles, file];
                // console.log(file)
            } else {
                dirTree[dir] = [...currFiles, fullPath]
                dirTree[fullPath] = [];
                queue.enqueue([fullPath])
            }
        }
    }
    return dirTree;
}


export function walkDirDFS(dir: string): DirectoryTree {
    let dirTree: DirectoryTree = {};
    for (const file of quickSort(fs.readdirSync(dir))) {
        const fullPath = path.join(dir, file);
        const currFiles = dirTree[dir] ?? [];
        if (fs.statSync(fullPath).isFile()) {
            dirTree[dir] = [...currFiles, file];
        } else {
            dirTree[dir] = [...currFiles, fullPath];
            const subDirRecords = walkDirDFS(fullPath);
            dirTree = {...dirTree, ...subDirRecords};
        }
    }
    return dirTree;
}


if (import.meta.main) {
    console.log("\nFiles:");
    const fileTreeBFS = walkDirBFS("..\\util");
    console.log(fileTreeBFS);
    const fileTreeDFS = walkDirDFS("..\\util");
    console.log(fileTreeDFS);
}
