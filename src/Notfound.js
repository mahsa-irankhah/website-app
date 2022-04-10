import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigate= useNavigate();
    function clickHandler() {
        navigate("/", {replace: true})
    }
    return (
        <div>
            <h1>Not Found</h1>
            <button onClick={clickHandler}>Go to Home Page</button>
        </div>
    );
};

export default Notfound;