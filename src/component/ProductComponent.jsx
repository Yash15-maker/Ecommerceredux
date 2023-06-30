import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div class="mt-5 grid sm:grid-cols-4 gap-8 p-6">
      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div>
            <div key={id} class="max-w-sm rounded overflow-hidden shadow-lg">
              <Link to={`/product/${id}`}>
                <img class="w-48" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{title}</div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ${price}
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {category}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
