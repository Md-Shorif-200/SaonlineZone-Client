import React from 'react';
import Banner from './Banner';
import PricingPlan from './PricingPlan';
import AboutUs from './AboutUs';
import WhatWeProvide from './WhatWeProvide';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
           <AboutUs></AboutUs>
            <WhatWeProvide></WhatWeProvide>
          <PricingPlan></PricingPlan>
        </div>
    );
};

export default Home;