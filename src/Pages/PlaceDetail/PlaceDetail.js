import React from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetail = () => {
    const { placeId } = useParams();
    return (
        <div>
            <h1>Welcome to Detail:{placeId}</h1>
        </div>
    );
};

export default PlaceDetail;