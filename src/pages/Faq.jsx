import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be in their original condition and packaging. To initiate a return, please visit our Returns page and follow the instructions provided.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order has shipped, you will receive a tracking number via email. You can use this number to track your shipment on our Track Order page.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping usually takes 5-7 business days. Expedited shipping options are available at checkout for faster delivery. International shipping times vary depending on the destination.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Orders can be modified or canceled within 1 hour of placement. After this period, we cannot guarantee changes or cancellations. Please contact our Customer Service team immediately if you need assistance.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes, we offer gift cards in various denominations. You can purchase them on our Gift Cards page and they can be redeemed at checkout. Gift cards are non-refundable and do not expire.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our Customer Support team via email at support@example.com, by phone at (123) 456-7890, or through our live chat feature available on the website during business hours.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary based on location. Please check our Shipping Information page for details on international orders.",
    },
    {
      question: "What do I do if I received a damaged or incorrect item?",
      answer:
        "If you receive a damaged or incorrect item, please contact our Customer Service team immediately. We will assist you with a replacement or refund. Be sure to provide your order number and any relevant photos.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Wholets - Digital Seller :: FAQ</title>
      </Helmet>
      <section className="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-72">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-5 text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary text-blue-800">
                  FAQ
                </span>
                <h2 className="text-blue-950 dark:text-white mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:grid-cols-2 grid gap-5">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8"
                >
                  <button
                    className="flex w-full text-left faq-btn"
                    onClick={() => handleToggle(index)}
                  >
                    <div
                      className={`bg-primary/5 dark:bg-white/5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                        {faq.question}
                      </h4>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="faq-content pl-[62px]">
                      <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.36" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Faq;
