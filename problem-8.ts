interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKey = keyof Person;

const validateKeys = <T extends Person>(
  person: T,
  keys: (keyof T)[]
): boolean => {
  const objKeys: string[] = Object.keys(person);
  return keys.every((k, i) => k === objKeys[i]);
};

const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
