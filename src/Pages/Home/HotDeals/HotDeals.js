import React from 'react';
import hot1 from '../../../images/hot/hot1.jpg';
import hot2 from '../../../images/hot/hot2.jpg';
import hot3 from '../../../images/hot/hot3.jpg';
import hot4 from '../../../images/hot/hot4.jpg';
import hot5 from '../../../images/hot/hot5.jpg';
import hot6 from '../../../images/hot/hot6.jpg';

const HotDeals = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-5'><span className='text-accent'>Hot</span> Deals</h1>
            <div class="carousel w-1/2 h-96 mx-auto rounded">
                <div id="item1" class="carousel-item w-full">
                    <img src={hot1} class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={hot2} class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={hot3} class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={hot4} class="w-full" alt='' />
                </div>
                <div id="item5" class="carousel-item w-full">
                    <img src={hot5} class="w-full" alt='' />
                </div>
                <div id="item6" class="carousel-item w-full">
                    <img src={hot6} class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
                <a href="#item5" class="btn btn-xs">5</a>
                <a href="#item6" class="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default HotDeals;