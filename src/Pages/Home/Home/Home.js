import React from 'react';
import Banner from '../Banner/Banner';
import HotDeals from '../HotDeals/HotDeals';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <HotDeals></HotDeals>
        </div>
    );
};

export default Home;