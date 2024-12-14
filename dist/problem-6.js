"use strict";
const updateProfile = (profile, info) => {
    return Object.assign(Object.assign({}, profile), info);
};
const myProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
console.log(updateProfile(myProfile, { name: "abdullah" }));
