import React from "react";

function Canvas() {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    const COLOR = "blue";
    const THICK = 2;
    let previousX = 0, previousY = 0, actualX = 0, actualY = 0;
    const getRealX = (clientX) => clientX - canvas.getBoundingClientRect().left;
    const getRealY = (clientY) => clientY - canvas.getBoundingClientRect().top;

    let startedDraw = false;

 canvas.addEventListener("mousedown", event => {
        previousX = actualX;
        previousY = actualY;
        actualX = getRealX(event.clientX);
        actualY = getRealY(event.clientY);
        ctx.beginPath();
        ctx.fillStyle = COLOR;
        ctx.fillRect(actualX, actualY, THICK, THICK);
        ctx.closePath();

        startedDraw = true;
    });

 canvas.addEventListener("mousemove", (event) => {
        if(!startedDraw) {
            return;
        }
        previousX = actualX;
        previousY = actualY;
        actualX = getRealX(event.clientX);
        actualY = getRealY(event.clientY);
        ctx.beginPath();
        ctx.moveTo(previousX, previousY);
        ctx.lineTo(actualX, actualY);
        ctx.strokeStyle = COLOR;
        ctx.lineWidth = THICK;
        ctx.stroke();
        ctx.closePath();
    });

    ["mouseup", "mouseout"].forEach(nombreDeevent => {
     canvas.addEventListener(nombreDeevent, () => {
            startedDraw = false;
        });
    });

    return (
        <canvas id="canvas" height={300} width={400} />
    )
}

export { Canvas };