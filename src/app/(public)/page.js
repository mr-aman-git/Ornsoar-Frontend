import React from "react";
import HeroSection from "../../components/homeSection/HeroSection";
import About from "../../components/homeSection/About";
import WhyChoose from "../../components/homeSection/WhyChoose";
import HowItWorks from "../../components/homeSection/HowItWorks";
import BrandsSection from "../../components/homeSection/BrandsSection";
import JobCategories from "../../components/homeSection/JobCategories";
import ClientTestimonials from "../../components/homeSection/ClientTestimonials";

export const metadata = {
  title: "Ornsoar Abroad Jobs | Overseas Job Consultancy",
  description:
    "Find overseas job opportunities with Ornsoar. Get expert guidance for working abroad, visa assistance, and international job placements.",
  openGraph: {
    title: "Ornsoar Abroad Jobs",
    description:
      "Trusted consultancy for overseas job opportunities, visa support, and international career guidance.",
    url: "https://ornsoar.com/",
    siteName: "Ornsoar",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const page = () => {
  return (
    <>
      <HeroSection />
      {/* <BrandsSection /> */}
      {/* <JobCategories /> */}
      {/* <ClientTestimonials /> */}
      {/* <About/>
        <WhyChoose/>
        <HowItWorks/> */}
    </>
  );
};

export default page;
