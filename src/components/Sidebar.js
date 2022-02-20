import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Sidebar({ canvasRef }) {
    const [images, setImages] = useState([]);
    const [ctx, setCtx] = useState(null);

    const fetchImages = async () => {
        console.log("HERE")
        axios.get('https://api.unsplash.com/photos/?per_page=20', {
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

    const onImageClick = (e) => {
        console.log(e.target);
        const image = e.target;
        // ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, 50, 100, 500, 450);
    }

    const setCanvasSize = ({ canvas }) => {
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // ...then set the internal size to match
        setCanvasSize(context);
        setCtx(context);
        fetchImages();
    }, [])

    return (
        <div id="sidebar" className='flex flex-col flex-1 bg-sidebar text-white justify-center items-center py-14'>
            <div className='text-xl mb-8'>Gallery</div>
            <div className='grid grid-cols-2 w-11/12 gap-3 overflow-x-hidden overflow-y-auto scrollbar-hide shadow-2'>
                {
                    images.map((image, index) => {
                        return  <img key={index} src={image.urls.regular} alt="img"
                                    className='w-60 h-36 object-cover rounded cursor-pointer' 
                                    onClick={onImageClick}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;