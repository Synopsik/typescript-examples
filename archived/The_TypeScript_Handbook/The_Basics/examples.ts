

export function example() {
    const message = "Hello, world!";
    message.toLowerCase();
    // message();
    console.log(message);
    greet("Steven", new Date());
}


export function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

