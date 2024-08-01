import React from 'react'
import Banner from '../Components/Banner'
import Section2 from '../Components/Section2'
import Section4 from '../Components/Section4'
import Section7 from '../Components/Section7'
import Testimonial from '../Components/Testimonial'
import Section5 from '../Components/Section5'
import LoadMore from '../Components/LoadMore'

const AboutPage = () => {
  return (
    <div>
        <Banner title={'About Us'}
        paragraph={''} />
        <Section2 />
        <Section4 />
        <Section5/>
        <Testimonial isHome={'true'}/>
        <LoadMore/>
        <Section7 />

    </div>
  )
}

export default AboutPage