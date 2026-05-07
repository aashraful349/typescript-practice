How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

=>The four pillars of OOP help organize code, reduce duplication, improve maintainability, and manage complexity in large TypeScript applications.

1. Inheritance

=>Inheritance allows one class to reuse properties and methods from another class.It enables many classes to use shared functionality.

Example:

        class Animal {
          speak() {
            console.log("Sound");
          }
        }

        class Dog extends Animal {
          bark() {
            console.log("Gew Gew");
          }
        }

Here:
i.Dog inherits speak() from Animal
ii.code is reused instead of rewritten

Benefits in large projects:
i.reduces duplicated logic
ii.creates reusable base classes
iii.keeps related functionality organized

2. Polymorphism

Polymorphism means:

=> One method can behave differently depending on the object using it.

Example:

        class Animal {
          makeSound() {
            console.log("Some sound");
          }
        }

        class Cat extends Animal {
          makeSound() {
            console.log("Meow");
          }
        }

        class Dog extends Animal {
          makeSound() {
            console.log("Gew");
          }
        }

Used same method to have different behavior

Benefits:
i.flexible architecture
ii.easier feature extension
iii.cleaner reusable interfaces

3. Abstraction

=>Abstraction hides unnecessary implementation details and exposes only essential behavior.Developers can use methods without understanding internal complexity.

Example:
        typescript id="8f6w2n"
        abstract class Payment {
          abstract pay(amount: number): void;
        }


Implement:

        class CreditCardPayment extends Payment {
          pay(amount: number) {
            console.log(`Paid ${amount} using card`);
          }
        }


Benefits: 
        i.simplifies complex systems
        ii.makes codes clear and easy to understand for the developer



4. Encapsulation

Encapsulation restricts direct access to internal data.

Example:
        class BankAccount {
          private balance = 1000;

          deposit(amount: number) {
            this.balance += amount;
          }

          getBalance() {
            return this.balance;
          }
        }


Here:
    Balance can't be accessed normally.It can be accessed through methods.

Benefits:
        i.protects data integrity
        ii.prevents accidental modification
        iii.reduces debugging issues
        iv.keeps logic centralized



These reduce complexity by reusing shared logic(Inheritance),flexible behavior(Polymorphism),hide complexity(Abstraction) and protecting internal state(Encapsulation).This hides unnecessary complexity, ensures code reusability and safety.All these helps to manage logic and reduce complexity.

