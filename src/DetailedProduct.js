import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedProduct = () => {
    const params = useParams();
    return (
        <div>
            Details - {params.id}
        </div>
    );
};

export default DetailedProduct;