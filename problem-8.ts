interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKey = keyof Person;

const validateKeys = <T extends Person>(person: T, arr: (keyof T)[]) => {
  const objKeys: string[] = Object.keys(person);
  return arr.every((k, i) => k === objKeys[i]);
};

const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
