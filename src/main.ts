import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { findMangoSeller } from "./mangoSellers";

async function main() {
    const rl = readline.createInterface({input, output});
    let answer = "";

    while (answer !== "2") {
        answer = await rl.question(
            "What do you want to run first?\n" +
            "1. Find Mango Seller\n" +
            "2. Quit\n"
        );
        if (answer === "1") findMangoSeller();
        console.log();
    }
    rl.close();
}

if (import.meta.main) {
    main();
}
