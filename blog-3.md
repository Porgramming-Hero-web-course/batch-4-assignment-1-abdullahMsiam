# Why are Type guard necessary?

By default Typescript ensure the safety from unnecessary human kind error and type of variable/parameter/proms etc. error. Sometime tsc is are flexible for the union types and allows us for more efficient code with types variation. In this time we have to think about **Type Guard** and now we are going to discuss about the necessary of type guard in typescript.

## The contents:

- [What is Type Guard?](#what-is-type-guard)
- [Different situation of using type guards.](#different-situation-of-using-type-guards)
- [Different types of type guards](#different-types-of-type-guards)
  - [1. typeof Type Guard](#1-typeof-type-guard)
  - [2. instanceof Type Guard](#2-instanceof-type-guard)
  - [3. user-defined Type Guard](#3-user-defined-type-guard)

## What is Type Guard?

**Type Guard** is a feature of typescript which narrowing the type of a variable. It allow type checking and define required and correct types for the variable.

## Different situation of using type guards.

There are situation which face most commonly:

- **Union Types**: A variable can be multiple types and typescript need to define the particular type for the variable.
- **External Inputs**: When data come from external sources code doesn't know the type of those datum or data.
- **Narrowing Types**: Specific properties and method need be used for particular situation. Then need to narrow down the type of a variable.

## Different types of type guards:

### 1. `Typeof` Type Guard

The typeof operator is used for the primitive types like 'string, boolean, number, etc'.

#### Example:

```typescript
function isString(value: string | number): boolean {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows 'value' is a string here
    return true;
  }
  return false;
}
```

### 2. `instanceof` Type Guard

This 'instanceof' operator check the type of object instance of specific class or constructor function.

#### Example:

```typescript
class Person {
  constructor(public name: string) {}
}

function greet(person: Person | string) {
  if (person instanceof Person) {
    console.log(`Hello, ${person.name}`);
  } else {
    console.log(`Hello, ${person}`);
  }
}
```

### 3. User-defined Type Guard

The user defined type guard is used by a function which return required type.

#### Example:

```typescript
interface Circle {
  radius: number;
}

interface Rectangle {
  width: number;
  height: number;
}

function isCircle(shape: Circle | Rectangle): shape is Circle {
  return (shape as Circle).radius !== undefined;
}
```
