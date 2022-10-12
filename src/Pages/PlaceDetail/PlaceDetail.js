import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetail = () => {
    const { placeId } = useParams();
    const [place, setPlace] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/place/${placeId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, [placeId]);
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl mx-9 my-20">
            <figure><img src={place.img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title text-primary">{place.name}</h2>
                <p className='text-neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, odit sed error harum minus cum commodi alias non incidunt quasi itaque repudiandae. Qui velit repellendus est suscipit culpa sunt ab accusamus, corrupti perferendis autem impedit distinctio necessitatibus id earum adipisci.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetail;