import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-12">
        <div className="flex max-sm:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="head-text">
              Save Big Using
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage and retain more
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["iPhone", "MacBook", "iPod", "AirPods", "Airpods Pro"].map(
            (product) => (
              <div>{product}</div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Home;