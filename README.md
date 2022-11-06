# 📦 Repository Pattern

This is a practical and real-life example of how to use the `Repository Pattern` with `Dependency Injection` to manipulate with the database like a **PRO**. 😎

## What is a Repository Pattern? 🤔

Repositories are `classes` or `components` that encapsulate the logic needed to access data sources. They centralize common data access functionality, providing better maintainability and decoupling the infrastructure or technology used to access databases. This allows us to change the Database used at any time, either from a `MySQL` to a `MongoDB` without further complexity.

![Repository Patteern Diagram UML](https://user-images.githubusercontent.com/64434514/200150833-2a0d4d65-b176-4556-ace7-e05ff067911f.png)

As you have to visualize `Repository` corresponds to the interface, that is, the contract that the specific implementations have to fulfill. In this case `MongoRepository`, `MySQLRepository`, `PostgreRepository`.

> **Note**: Whenever we want to add a new implementation (another database) we must implement this interface.

## What is a Dependency Injection? 💉

Dependency Injection allows objects to be supplied to a class instead of the class itself creating those objects. These objects fulfill contracts ([Interfaces](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces)) that our classes need in order to function.

![Dependencies Injection](https://user-images.githubusercontent.com/64434514/200151676-40359e1c-4237-43d6-a70e-406c387fd681.png)
