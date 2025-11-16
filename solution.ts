// Problem 1 Solution
const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  else if (typeof value === "number") {
    return value * 10;
  }
  else if (typeof value === "boolean") {
   return !value
  }
  else {
    return "This is not a string, number, or boolean" ;
  }
};


// Problem 2 Solution

const getLength = (value: string | (number | string | boolean)[]) => {
  if(Array.isArray(value))  {
    return value.length;
  }else if(typeof value === "string") {
    return value.length;
  }else {
    return "This is not a string or array";
  }
}