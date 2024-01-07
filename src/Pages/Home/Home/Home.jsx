import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import AboutBanner from '../AboutBanner/AboutBanner';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <AboutBanner></AboutBanner>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;