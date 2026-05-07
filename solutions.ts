//Problem 1:Filter Even Numbers
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem 2:String Reversal
const reverseString = (str: string): string => {
  return `"${str.split("").reverse().join("")}"`;
};
console.log(reverseString("typescript"));

//problem 3: Type Guard to check type
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return '"String"';
  } else if (typeof value === "number") {
    return '"Number"';
  }
};
console.log(checkType("Hello"));
console.log(checkType(42));

//problem 4: writing a generic function to return value using key

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return `"${obj[key]}"`;
};

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));

//Problem 5: creating interface book and adding new isRead property
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book, isRead: boolean = true) {
  return JSON.stringify(
    {
      title: book.title,
      author: book.author,
      publishedYear: book.publishedYear,
      isRead: isRead,
    },
    null,
    2,
  );
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

//problem 6:class

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

//problem 7:creating a function to find out common elements between two arrays
const getIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((element) => arr2.includes(element));
};


console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
