const getProperty = <T, K>(person: T, key: K) => {
  return person[key as keyof T];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
