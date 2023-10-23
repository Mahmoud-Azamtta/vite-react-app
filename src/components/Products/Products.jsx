import React from "react";
import Product from "../Product/Product";
import "./Products.css";

export default function Products() {
    const products = [
        {
            id: 1,
            title: "Product One",
            desc: "this is product one",
            price: 100,
        },
        {
            id: 2,
            title: "Product Two",
            desc: "this is product two",
            price: 200,
        },
        {
            id: 3,
            title: "Product Three",
            desc: "this is product three",
            price: 300,
        },
        {
            id: 4,
            title: "Product Four",
            desc: "this is product four",
            price: 400,
        },
    ];
    return (
        <section className="products" id="products">
            <div className="container my-5">
                <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1">
                    {/* <Product title={ products[0].title } />
                    <Product title={ products[1].title } />
                    <Product title={ products[2].title } />
                    <Product title={ products[3].title } /> */}
                    {products.map((product) => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
