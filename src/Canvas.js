import React from "react";

function Canvas() {

    const lienzo = document.querySelector("canvas");
    const ctx = lienzo.getContext('2d');
    const COLOR = "blue";
    const GROSOR = 2;
    let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
    const obtenerXReal = (clientX) => clientX - lienzo.getBoundingClientRect().left;
    const obtenerYReal = (clientY) => clientY - lienzo.getBoundingClientRect().top;

    let comienzaDibujo = false;

    lienzo.addEventListener("mousedown", evento => {
        xAnterior = xActual;
        yAnterior = yActual;
        xActual = obtenerXReal(evento.clientX);
        yActual = obtenerYReal(evento.clientY);
        ctx.beginPath();
        ctx.fillStyle = COLOR;
        ctx.fillRect(xActual, yActual, GROSOR, GROSOR);
        ctx.closePath();

        comienzaDibujo = true;
    });

    lienzo.addEventListener("mousemove", (evento) => {
        if(!comienzaDibujo) {
            return;
        }
        xAnterior = xActual;
        yAnterior = yActual;
        xActual = obtenerXReal(evento.clientX);
        yActual = obtenerYReal(evento.clientY);
        ctx.beginPath();
        ctx.moveTo(xAnterior, yAnterior);
        ctx.lineTo(xActual, yActual);
        ctx.strokeStyle = COLOR;
        ctx.lineWidth = GROSOR;
        ctx.stroke();
        ctx.closePath();
    });

    ["mouseup", "mouseout"].forEach(nombreDeEvento => {
        lienzo.addEventListener(nombreDeEvento, () => {
            comienzaDibujo = false;
        });
    });

    return (
        <canvas id="canvas" height={300} width={400} />
    )
}

export { Canvas };