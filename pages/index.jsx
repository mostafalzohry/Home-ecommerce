import Head from "next/head";

import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Item from "../components/Item";

import Slider from "../components/Slider";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import AllNav from "../components/NavBar/AllNav";
import Cards from "../components/Cards";
import React, { Suspense } from "react";

 
    

export default function Home() {


  return (

   
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllNav />
      <Slider />
      <Categories />

      <HeroImage src="/MaskGroup06@2x.png" width="1000" height="1000" />

      <Brands />

      <HeroImage src="/Group1339@2x.png" width="1000" height="1000" />

      <Item title="Featured items" />
      <Item title="Most Viewed items" />

      <Cards />
      <Footer />
    </div>
  
  );
}
