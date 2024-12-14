"use strict";
const validateKeys = (person, keys) => {
    const objKeys = Object.keys(person);
    return keys.every((k, i) => k === objKeys[i]);
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
