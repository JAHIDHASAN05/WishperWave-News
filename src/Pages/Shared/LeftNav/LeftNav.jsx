import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [category, setCategory]= useState([])

    useEffect(()=>{
        fetch('http://localhost:1212/category')
        .then(res=> res.json())
        .then(data=> setCategory(data))
        .catch(error=>console.error(error))
    },[])

    // console.log(category)
    return (
        <div >
            {
                category.map(n=> <p key={n.id}>
                    <Link to={`/category/${n.id}`}>{n.Category}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;