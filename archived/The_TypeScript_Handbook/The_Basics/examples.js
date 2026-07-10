export function example() {
    const message = "Hello, world!";
    message.toLowerCase();
    // message();
    console.log(message);
    greet("Steven", new Date());
}
export function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
