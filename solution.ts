// Problem 1 Solution

type Value = string | number | boolean;

const formatValue = (value: Value): Value => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return "Wrong Input";
  }
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// Problem 2 Solution

const getLength = <T>(value: string | T[]) => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return "Wrong Input";
  }
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));


// Problem 3 Solution

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// Problem 4 Solution

type BookType = {
  title: string;
  rating: number;
};

const filterByRating = (books: BookType[]): BookType[] => {
  const newArray = books.filter((book) => book.rating > 0 && book.rating <= 5 && book.rating >= 4);
  return newArray;
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));

// Problem 5 Solution

type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: UserType[]): UserType[] => {
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

const printBookDetails = (book: Book): string => {
  if (book.isAvailable) {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
  } else {
    return "Wrong Input";
  }
};

// Problem 7 Solution

type UniqueValues = number[] | string[];

const getUniqueValues = (array1: UniqueValues, array2: UniqueValues) => {
  const newArray = [...new Set([...array1, ...array2])];
  return newArray;
};

// Problem 8 Solution
  
type ProductType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: ProductType[]): number => {
  return products.reduce((acc, product) => {
    if (product.discount && (product.discount <= 0 || product.discount >= 100)) {
      console.error("Discount is out of range");
      acc = 0;
      return acc;
    } else if (product.discount) {
      const discount = ((product.price * product.quantity) / 100) * product.discount;
      return acc + product.price * product.quantity - discount;
    } else {
      return acc + product.price * product.quantity;
    }
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 200 },
];

console.log(calculateTotalPrice(products));
