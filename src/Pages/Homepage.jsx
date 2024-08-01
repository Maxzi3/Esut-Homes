import React from 'react'
import Banner from "../Components/Banner";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Testimonial from "../Components/Testimonial";
import LoadMore from "../Components/LoadMore";
import Section7 from "../Components/Section7";
import LodgesList from "../Components/LodgesList";
import ViewAll from '../Components/ViewAll';

const Homepage = () => {
  return (
    <div>
      <Banner
        title={"The Best Way to Get An Apartment"}
        paragraph={"Find your perfect home with our easy-to-use Platform"}
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <LodgesList
        isHome={true}
        title="What we offer"
        subtitle="Exclusive Offer For You"
      />
      <ViewAll/>
      <Section5 />
      <Testimonial isHome={'true'} />
      <LoadMore />
      <Section7 />
    </div>
  );
}

export default Homepage