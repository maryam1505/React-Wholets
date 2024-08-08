import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../features/products/productSlice";
import { Helmet } from "react-helmet";
import Card from "../components/Card";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.productData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productData());
  }, []);
  return (
    <>
      <Helmet>
        <title>Wholets - Digital Seller :: Products</title>
      </Helmet>
      <div>
        <Card data={data} loading={loading} error={error} />
      </div>
    </>
  );
};

export default Products;
