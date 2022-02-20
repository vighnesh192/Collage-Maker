import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Sidebar() {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        console.log("HERE")
        axios.get('https://api.unsplash.com/photos/?per_page=8', {
            headers: {
                // 'Accept-Version': 'v1',
                'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
                "ACCESS-CONTROL-ALLOW-ORIGIN": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
            }
        })
        .then((res) => {
            console.log(res.data)
            setImages([...res.data])
            console.log("IMAGES STATE:--", images)
        })
        .catch((err) => console.log("IMAGE FETCH ERROR:-", err)); 
    }

    useEffect(() => {
        console.log("HERRL")
        fetchImages();
    }, [])

    return (
        <div id="sidebar" className='flex flex-col flex-1 bg-sidebar text-white justify-center items-center'>
            <div className='text-xl mb-8'>Gallery</div>
            <div className='grid grid-cols-2 w-11/12 gap-3'>
                {
                    images.map((image, index) => {
                        return  <div  >
                                    <img key={index} src={image.urls.regular} alt="img"
                                        // className='h-3/5 w-3/5' 
                                        className='w-60 h-36 object-cover rounded' 
                                    />
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;