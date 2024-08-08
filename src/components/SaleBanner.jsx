import React from "react";

function SaleBanner() {
  return (
    <section className="w-full h-full shadow-sm">
      <div
        className="relative h-80 bg-fixed bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: `url('https://images01.nicepagecdn.com/page/33/39/website-template-preview-3339259.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    </section>
  );
}

export default SaleBanner;
