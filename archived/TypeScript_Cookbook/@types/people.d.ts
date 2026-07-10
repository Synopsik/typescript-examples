export interface Person {
    name: string;
    age: number;
}

export type PersonType = {
    name: string;
    age: number;
}


export interface Student extends Person {
    semester: number;
}

export type User = {
    name: string;
    age: number;
    id: number;
}


