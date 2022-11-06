# 📦 Repository Pattern

This is a practical and real-life example of how to use the `Repository Pattern` with `Dependency Injection` to manipulate with the database like a **PRO**. 😎

## What is a Repository Pattern? 🤔

Repositories are `classes` or `components` that encapsulate the logic needed to access data sources. They centralize common data access functionality, providing better maintainability and decoupling the infrastructure or technology used to access databases. This allows us to change the Database used at any time, either from a `MySQL` to a `MongoDB` without further complexity.

## What is a Dependency Injection? 💉

Dependency Injection allows objects to be supplied to a class instead of the class itself creating those objects. These objects fulfill contracts ([Interfaces](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces)) that our classes need in order to function.
