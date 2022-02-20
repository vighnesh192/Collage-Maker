import React from 'react'

// Forward this ref argument down to <canvas/> element
const Canvas = React.forwardRef((props, canvasRef) => (

    // const canvasRef = useRef(null);

    // const draw = ctx => {
    //     ctx.fillStyle = '#000000'
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20, 0, 2*Math.PI)
    //     ctx.fill()
    // }
    
    // useEffect(() => {
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //     //Our first draw
    //     draw(context);
    //   }, [])

    // return (
        <div id="canvas-component" className='flex flex-3 items-center bg-canvas text-white px-20 py-20'>
            {/* When the canvasRef is attached, canvasRef.current will point to <canvas/> element */}
            {/* w-full h-full ==> Make it visually fill the positioned parent */}
            <canvas ref={canvasRef} id="canvas" className=" bg-white w-full h-full rounded shadow-xl shadow-black mx-20" />
        </div>
    // )
));

export default Canvas