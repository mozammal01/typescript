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

const getLength = <T>(value: string | T[]) => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return "Wrong Input";
  }
};

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

type BookType = {
  title: string;
  rating: number;
};

const filterByRating = (books: BookType[]): BookType[] => {
  const newArray = books.filter((book) => book.rating > 0 && book.rating <= 5 && book.rating >= 4);
  return newArray;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: UserType[]): UserType[] => {
  const newArray: UserType[] = [];
  const activeUsers = users.filter((user) => user.isActive);
  newArray.push(...activeUsers);
  return newArray;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
};




type UniqueValues = number[] | string[];

const getUniqueValues = (array1: UniqueValues, array2: UniqueValues) => {
  const newArray = [...new Set([...array1, ...array2])];
  return newArray;
};




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
