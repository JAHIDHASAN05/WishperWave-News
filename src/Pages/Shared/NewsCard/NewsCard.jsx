import React, { useEffect, useState } from 'react';
import { Button, Card, } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { CiBookmark, CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaEye } from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';
import {  TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
const NewsCard = () => {
    const params = useParams();
    const [filterNews, setFilterNews] = useState([])

    useEffect(() => {
     

     fetch(`http://localhost:1212/category/${params.id}`)
     .then(res => res.json())
     .then(data => setFilterNews(data))
     .catch(error => console.error(error))

            
    }, [filterNews])


 console.log(filterNews)

 


    return (
        <div>            {
            filterNews.map(news =>
                <Card key={news._id} className="mb-4">
                    <Card.Header className='d-flex justify-content-between  align-items-center'>
                        <div className='d-flex'>
                            <Image className='my-auto me-2' style={{ height: '2.35rem' }} src={news.author.img} roundedCircle />
                            <div className='my-auto mt-2  '>
                                <h4>{news.author.name}</h4>
                                <p>{moment(news.author.published_date).format('MMMM D, YYYY, ')}</p>
                            </div>
                        </div>
                        <div className=' '>
                            <CiBookmark style={{ height: '2.5rem' }}></CiBookmark>
                            <IoShareSocialOutline />

                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title><h4>{news.title} </h4></Card.Title>

                        <img className='img-fluid' src={news.image_url} alt="" />
                        <Card.Text>

                               {news.details.length<250 ?<> {news.details }</>: 
                               <>{news.details.slice(0,250)}.... <Link to={`/news/${news._id}`}>Read More</Link></>} 
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                        <div className='flex-grow-1'>
                            <Rating placeholderRating={news.rating?.number}
                                emptySymbol={<img src={<CiStar/>} className="icon" />}
                                placeholderSymbol={<img src={<TiStarHalfOutline />} className="icon" />}
                                fullSymbol={<img src={<TiStarFullOutline />} className="icon"  />}>

                                </Rating>

                            {news.rating?.number}
                        </div>
                        <div>
                            <FaEye></FaEye> {news.total_view}
                        </div>
                    </Card.Footer>
                </Card>
            )
        }
        </div>
    );
};

export default NewsCard;