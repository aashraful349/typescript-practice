How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

=>With Pick and Omit utility types a smaller version of the interface can be created without rewriting the code.

        type Product = {
            id: number;
            name: string;
            price: string;
            stock: number;
            color?: string;
        };

        type ProductSummary = Pick<Product, "id" | "name" | "price">;

        type ProductWithoutStock = Omit<Product, "stock" | "color">;
    
    In the given example we created two new types with pick and omit. Here Product is the master interface. When we used Pick<Product, "id" | "name" | "price"> it created new type called ProductSummary containing id,name and price.As a result we didn't have to create a new type..Which would have repeated the code.So, Pick kept our code DRY as we were able to create a new type without repeating the code.

    Same goes for Omit.It created a new type without stock and color.

Because of using Pick and Omit we didn't have to repeat the same information multiple type.As a result of using them :
    i.we could use the existing interface
    ii.it reduced repeating property declaration
    iii.prevents inconsistent types