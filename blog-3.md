How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?
=>Generics are a way of creating components that works with a variety of data types rather then one.
Example:
        type GenericArray<T> = Array<T>;
        const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
        const rollNumbers: GenericArray<number> = [4, 7, 11];

    In the given examle T is a generic parameter.Instead of hard coding now we can use the same type to create different types of array.When string is passed T becomes string and when number is passed T becomes number.Which ensure flexibility,reusability and strict type safety.
    Here even tho a common type or dynamic type is used typescript remembers the exact type.friends.push("Mr. A"); is allowed to friends but  friends.push(10); will give error.