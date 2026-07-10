// People datasets for binary search and other Chapter 1 exercises
// from Grokking Algorithms (2nd Edition).

// Small unsorted list of names - quick demos and base-case testing.
export const unsortedPeople: string[] = [
    "Steven Baar",
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Emily Davis",
    "Michael Wilson",
    "Sarah Taylor",
    "David Lee",
    "Robert Anderson",
    "Emily Wilson",
    "Frank Miller",
    "Grace Hopper",
    "Henry Ford",
    "Isabella Garcia",
    "Jack Wilson",
    "Karen Adams",
    "Liam Martinez",
    "Mia Thompson",
    "Noah Clark",
]

// Sorted alphabetically - ready for binary search by full name.
export const sortedPeople: string[] = [
    "Alice Johnson",
    "Bob Brown",
    "David Lee",
    "Emily Davis",
    "Emily Wilson",
    "Frank Miller",
    "Grace Hopper",
    "Henry Ford",
    "Isabella Garcia",
    "Jack Wilson",
    "Jane Smith",
    "John Doe",
    "Karen Adams",
    "Liam Martinez",
    "Mia Thompson",
    "Michael Wilson",
    "Noah Clark",
    "Robert Anderson",
    "Sarah Taylor",
    "Steven Baar",
]

// Larger sorted list of first names - more realistic binary search target.
export const sortedFirstNames: string[] = [
    "Aaron", "Alice", "Amanda", "Andrew", "Angela",
    "Anna", "Anthony", "Ashley", "Barbara", "Benjamin",
    "Betty", "Brandon", "Brian", "Carol", "Charles",
    "Christopher", "Daniel", "David", "Deborah", "Donald",
    "Donna", "Dorothy", "Edward", "Elizabeth", "Emily",
    "Eric", "Frank", "Gary", "George", "Helen",
    "Jacob", "James", "Jane", "Jason", "Jennifer",
    "Jessica", "John", "Joseph", "Joshua", "Karen",
    "Kenneth", "Kevin", "Kimberly", "Larry", "Laura",
    "Linda", "Lisa", "Margaret", "Mark", "Mary",
    "Matthew", "Melissa", "Michael", "Michelle", "Nancy",
    "Nicholas", "Olivia", "Patricia", "Paul", "Rebecca",
    "Richard", "Robert", "Ronald", "Ruth", "Samuel",
    "Sandra", "Sarah", "Scott", "Sharon", "Stephen",
    "Steven", "Susan", "Thomas", "Timothy", "William",
]

// Structured person records - useful for searching/sorting by a field.
export interface Person {
    id: number
    name: string
    age: number
    city: string
}

// Sorted by `id` ascending - binary search on numeric key.
export const peopleById: Person[] = [
    { id: 1,  name: "Alice Johnson",    age: 30, city: "Seattle" },
    { id: 4,  name: "Bob Brown",        age: 25, city: "Portland" },
    { id: 7,  name: "Carol White",      age: 42, city: "Boise" },
    { id: 12, name: "David Lee",        age: 35, city: "San Francisco" },
    { id: 18, name: "Emily Davis",      age: 28, city: "Los Angeles" },
    { id: 23, name: "Frank Miller",     age: 51, city: "Las Vegas" },
    { id: 29, name: "Grace Hopper",     age: 60, city: "New York" },
    { id: 34, name: "Henry Ford",       age: 47, city: "Detroit" },
    { id: 41, name: "Isabella Garcia",  age: 22, city: "Miami" },
    { id: 48, name: "Jack Wilson",      age: 33, city: "Chicago" },
    { id: 55, name: "Karen Adams",      age: 39, city: "Denver" },
    { id: 63, name: "Liam Martinez",    age: 27, city: "Austin" },
    { id: 70, name: "Mia Thompson",     age: 31, city: "Boston" },
    { id: 77, name: "Noah Clark",       age: 45, city: "Phoenix" },
    { id: 82, name: "Olivia Lewis",     age: 29, city: "Atlanta" },
    { id: 90, name: "Peter Walker",     age: 38, city: "Dallas" },
    { id: 99, name: "Quinn Robinson",   age: 24, city: "Houston" },
]

// Same records sorted alphabetically by name - binary search on string key.
export const peopleByName: Person[] = [...peopleById].sort((a, b) =>
    a.name.localeCompare(b.name),
)
