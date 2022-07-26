import React, { useEffect, useRef, useState } from "react";

function Canvas() {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 400;
        canvas.height = 400;

        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.strokeStyle = "#e3e33e";
        ctx.lineWidth = 4;
        contextRef.current = ctx;
    }, []);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
    };

    const draw = ({nativeEvent}) => { 
        if(!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    return (
        <canvas className="canvi"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing} 
        />
    )
}

export { Canvas };