import React, { useEffect } from "react";
import CarouselHeader from "../components/CarouselHeader";
import SaleBanner from "../components/SaleBanner";
import About from "./About";
import ContactForm from "../components/ContactForm";
import OurProducts from "../components/OurProducts";
import RelatedProducts from "../components/RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { featureData } from "../features/products/FeatureSlice";
import Loader from "../components/Loader";
import RefreshError from "../components/RefreshError";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.featureData);
  useEffect(() => {
    dispatch(featureData());
  }, []);

  if (loading) return <Loader />;
  if (error) return <RefreshError />;

  return (
    <>
      <div className="overflow-hidden">
        <CarouselHeader />        <About />
        <SaleBanner />
        <OurProducts />
        <section className="w-full">
          <ContactForm />
        </section>
        <p className="text-4xl font-bold pl-28 pt-14 pb-7 text-blue-950">
          Featured Products
        </p>
        <RelatedProducts data={data} loading={loading} error={error} />
      </div>
    </>
  );
};

export default Home;
