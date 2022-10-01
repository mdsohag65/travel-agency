import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';
import Guides from './Guides/Guides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Guides></Guides>
            <Footer></Footer>
        </div>
    );
};

export default Home;