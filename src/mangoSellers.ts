import { mangoSellerGraph } from "../data";
import { Queue } from "../util/queue";


export function findMangoSeller(): boolean {
    const queue = new Queue<string>();

    const start = mangoSellerGraph["you"];
    if (start) {
        queue.enqueue(start);
    }

    while (!queue.isEmpty) {
        const person = queue.dequeue();
        if (person) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller!`);
                return true;
            } else {
                const friends = mangoSellerGraph[person];
                if (friends) {
                    queue.enqueue(friends);
                }
            }
        }
    }
    console.log("No mango seller found.")
    return false;
}



function personIsSeller(person: string): boolean {
    return person.endsWith("m");
}