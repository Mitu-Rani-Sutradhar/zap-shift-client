import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Serv from '../Serv/Serv';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json')
  .then(response => response.json());
  



const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <HowItWorks></HowItWorks>
               <Services></Services>
               <Brands></Brands>
               <Serv></Serv>
               <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;