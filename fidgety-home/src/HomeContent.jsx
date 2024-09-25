import React, { useEffect, useState } from "react";
import { getProducts } from "./products";

export default function HomeContent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts().then(setProducts);
    }, []);

    return <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
            <div key={product.id}>
                <img src={product.image} alt={product.name}></img>
            </div>
        ))}
    </div>
}