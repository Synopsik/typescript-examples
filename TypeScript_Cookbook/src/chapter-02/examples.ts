import { Person, PersonType, Student, User } from "../../@types/people"


export function createPerson(name: string, age: number): Person {
    return { name, age };
}

export function test() {
    console.log("Hello, world! 123");
}

export function annotating_effectively() {
    // Type inference
    let aNumber = 2;
    // aNumber: number

    // Type annotation
    let anotherNumber: number = 3;
    // anotherNumber: number

    const me: Person = createPerson("Bobby", 25);

    const user: User = {
        name: "Stefan",
        age: 40,
        id: 815,
    };

    const student: Student = {
        name: "Bobby",
        age: 22,
        semester: 4,
    };

    // ------- Functions -----



    function printPerson(person: Person) {
        console.log(person.name, person.age);
    }

    // ------- Commands -----

    printPerson(me);
    printPerson(student);
    printPerson(user);


}

export function any_and_unknown() {
    const name: any = "Stefan";
    const person: any = {name: "Stefan", age: 40};
    const notAvailable: any = undefined;
    // Good!
    const me: string = name;
    // Bad! but okay for type system
    // const age: number = name;
    const me2: unknown = "Steven";
    // Unknown is not assignable to type String
    // const name2: string = me2;

    // Works if we use any
    function printPerson(person: any) {
        for (let key in person) {
            console.log(`${key}: ${person[key]}`);
        }
    }

    // Or if we use a Generic type to extend Person
    function printPerson2<T extends Person>(person: T) {
        for (let key in person) {
            console.log(`${key}: ${person[key]}`)
        }
    }

    function doSomething(value: unknown) {
        if (typeof value === "string") {
            console.log("It's a string", value.toUpperCase());
        } else if (typeof value === "number") {
            console.log("It's a number", value * 2);
        }
    }

    printPerson(person);
    printPerson2(person);
    doSomething("Test");
    doSomething(69);
}

export function choosing_right_object_type() {
    // {} includes everything but null or undefined
    let obj1: {};
    obj1 = 32;
    obj1 = "Hello";
    obj1 = true;
    obj1 = () => { console.log("Hello") };
    // obj = undefined; // Error!
    // obj = null; // Error!
    obj1 = { name: "Steven", age: 31 };
    obj1 = [];
    obj1 = /.*/;

    // object allows for any compound type but no primitive types
    let obj2: object;
    // obj2 = 32; // Error!
    // obj2 = "Hello"; // Error!
    // obj2 = true; // Error!
    obj2 = () => { console.log("Hello, world!") };
    // obj2 = undefined // Error!
    // obj2 = null; //Error!
    obj2 = { name: "Steven", age: 31 };
    obj2 = [];
    obj2 = /.*/;
}

export function working_with_tuple_types() {
    const person: [name: string, age: number] = ["Steven", 21];

    const [name, age] = person;

    console.log(name, age);

    person[0] = "Steven Baar";
    person[1] = 31;

    console.log(person[0], person[1]);

    // Tuple types can be used to annotate function arguments
    function hello(name: string, age: number): void { // Without tuples
        console.log(name, age)
    }

    function hello2(...args: [name: string, msg: string]): void {
        console.log(args[0], args[1])
    }

    // These are all conceptually the same
    function h(a: string, b: string, c: string): void {}
    function i(a: string, b: string, ...r: [string]): void {}
    function j(a: string, ...r: [string, string]): void {}
    function k(...r: [string, string, string]): void {}


    hello("Steven", 31);
    hello2("Steven", "Hello, world!");

    function newHello(...args: [name: string, age: number]): void {
        console.log(args[0], args[1]);
    }

    const newPerson: [string, number] = ["Sean", 9];
    newHello(...newPerson);
}

export function interfaces_versus_type_aliases() {
    // One important difference between interfaces and type aliases.
    // Interfaces use Declaration merging.
    // Declaration merging allows for adding properties to an interface,
    // even after it has been declared.

    interface Person {
        name: string;
    }
    // Person is:
    // {
    //     name: string;
    // }

    interface Person {
        age: number;
    }
    // Person is now:
    // {
    //     name: string;
    //     age: number;
    // }

   // Type Aliases prevent you from accidentally reusing or extending already declared types
   type PersonAsType = {
        name: string;
        age: number;
        address: string[];
        greet(): string;
   };
}


export function defining_function_overloads() {
    type CallbackFn = () => void;

    // Types for the type system
    function task(name: string, dependencies: string[]): void;
    function task(name: string, callback: CallbackFn): void
    function task(name: string, dependencies: string[], callback: CallbackFn): void
    // The acutal implementation
    function task(
        name: string, param2: string[] | CallbackFn, param3?: CallbackFn
    ): void {
        console.log("Hello, world!")
    }

    // It's your responsibility to make sure that inputs and outputs match
    function fn(input: number): number
    function fn(input: string): string
    function fn(input: number | string): number | string {
        if(typeof input === "number") {
            return "this also works";
        } else {
            return 1337;
        }
    }

    const typeSaysNumberButItsAString = fn(12);
    const typeSaysStringButItsANumber = fn("Hello world");

    // You can also create overloaded types that can be used in annotations or to assign multiple implmentations
    type TaskFn = {
        (name: string, dependencies: string[]): void;
        (name: string, callback: CallbackFn): void;
        (name: string, dependencies: string[], callback: CallbackFn): void;
    }

}


export function defining_this_param_types() {
    const author = {
        name: "Stefan",
    };

    function hi() {
        console.log(this.name);
    }

    const pet = {
        name: "Finni",
        kind: "Cat",
    };

    hi.apply(pet);
    hi.call(author);

    const boundHi = hi.bind(author);

    boundHi();
}