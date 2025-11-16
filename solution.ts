// Problem 1 Solution
const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return "This is not a string, number, or boolean";
  }
};

// Problem 2 Solution

const getLength = (value: string | (number | string | boolean)[]) => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return "This is not a string or array";
  }
};

// Problem 3 Solution

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person = new Person("John", 30);
// console.log(person.getDetails());


// Problem 4 Solution

const myBooks = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const getHighestRatedBook = (books: { title: string; rating: number }[]) => {
  const highestRatedBook = books.filter((book) => book.rating > 4);
  return highestRatedBook;
};

// Problem 5 Solution

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

const filterActiveUsers = (users: { id: number; name: string; email: string; isActive: boolean }[]) => {
  const activeUsers = users.filter((user) => user.isActive);
  return activeUsers;
};

// Problem 6 Solution

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  if (book.isAvailable) {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
  }
};

const myBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

// console.log(printBookDetails(myBook));

// Problem 7 Solution

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

type UniqueValues = number[] | string[];

const getUniqueValues = (array1: UniqueValues, array2: UniqueValues) => {
  const newArray = [...new Set([...array1, ...array2])];
  return newArray;
};

// console.log(getUniqueValues(array1, array2));

// Problem 8 Solution

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
const calculateTotalPrice = (products) => {
  return products.reduce((acc, product) => {
    // return acc + (product.price * product.quantity) - (product.discount || 0);
    return acc + product.price * product.quantity;
  }, 0);
};

console.log(calculateTotalPrice(products));
