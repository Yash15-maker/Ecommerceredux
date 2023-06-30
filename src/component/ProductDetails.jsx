import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectProduct,
  removeSelectProduct,
} from "../redux/actions/productaction";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { id, title, image, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId !== "" && productId) fetchProductDetails(productId);
    return () => {
      dispatch(removeSelectProduct());
    };
  }, [productId]);

  const skeleton = () => {
    return (
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>{skeleton()}</div>
      ) : (
        <div class="flex font-sans " key={id}>
          <div class="flex-none w-96 relative">
            <img
              src={image}
              alt=""
              class="absolute inset-0 w-full h-full object-cover p-3"
              loading="lazy"
            />
          </div>
          <form class="flex-auto p-9">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                {title}
              </h1>
              <div class="text-lg font-semibold text-slate-500">${price}</div>
              <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                {category}
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-1 flex text-sm container">{description}</div>
            </div>
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  {product.rating.rate}✨
                </button>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Count= {product.rating.count}
                </button>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Add To Cart
                </button>
              </div>
            </div>
            <p class="text-sm text-slate-700">
              Try Contact at our mail for any inconvinence.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
