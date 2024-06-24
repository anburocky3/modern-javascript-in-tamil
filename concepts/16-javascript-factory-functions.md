# JavaScript Factory Function Example

## Introduction

A factory function is a function that returns an object. Unlike classes or constructor functions, factory functions do not use the `new` keyword. They are often used to create multiple instances of similar objects without the overhead of creating a class.

## Why Use Factory Functions?

- **Simplicity**: Factory functions are often simpler and more straightforward than using classes or constructors.
- **Encapsulation**: They help encapsulate the creation logic and provide a clear API for creating objects.
- **Flexibility**: Factory functions can return different kinds of objects based on input parameters.

## Example

Let's create a factory function for creating `Person` objects.

```js
// Factory Functions
function createPerson(name, age) {
  const place = 'Chennai'

  return {
    name,
    age,
    introduceSelf() {
      return `Hi my name is ${obj.name}`
    },
    place,
  }
}

const createdPerson = createPerson('Anbu', 27)

console.log(createdPerson)
```

### Explanation

1. **Factory Function Definition**:

   - The `createPerson` function takes `name` and `age` as arguments.
   - It returns an object with `name`, `age`, and `introduceSelf` properties.

2. **Object Methods**:

   - `introduceSelf`: Increments the age and logs a birthday message.

3. **Creating Instances**:

   - `const person1 = createPerson('Anbu', 27);`
   - `const person2 = createPerson('Trisha', 41);`
   - Each call to `createPerson` returns a new object with its own `name` and `age`.

4. **Using the Methods**:
   - `person1.introduceSelf();` logs "Hello, my name is Alice and I am 30 years old."

## Conclusion

Factory functions are a powerful and flexible way to create objects in JavaScript. They provide a clean and simple way to encapsulate object creation logic without the need for classes or constructors. By using factory functions, you can create multiple instances of objects with ease and maintain a clear and concise codebase.
