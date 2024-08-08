import React from "react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
    <Helmet>
        <title>Wholets - Digital Seller :: Contact Us</title>
    </Helmet>
    <header className="h-[33rem]">
        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?v=1618511825" alt="About Image" className="w-full h-full object-cover object-center"/>
    </header>
      <ContactForm />
    </>
  );
}

export default Contact;
