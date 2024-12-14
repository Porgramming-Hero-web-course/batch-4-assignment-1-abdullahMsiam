"use strict";
{
    const getProperty = (person, key) => {
        return person[key];
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
