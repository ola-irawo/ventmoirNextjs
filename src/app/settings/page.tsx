"use client"
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  const startDrawing = (e) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    if(isErasing){
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = "20"
    }
    else {
      ctx.strokeStyle = '#000000'; // Default drawing color
      ctx.lineWidth = 2;
    }

    ctx.beginPath()
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    setIsDrawing(true)

  }

  const draw = e => {
    if(!isDrawing) return;

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.stroke()
  } 

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

  // useEffect(() => {
  //   const canvas = canvasRef?.current

  //   const ctx = canvas?.getContext("2d")
  //   ctx.fillStyle = "green";
  //   ctx.fillRect(10, 10, 150, 100);
  //   ctx.fillStyle = "blue";
  //   ctx.fillRect(30, 30, 150, 100);

  //   ctx.lineWidth = "10"
  //   ctx.strokeStyle = "red"
  //   ctx.strokeRect(50, 50, 100, 100)

  //   // ctx.clearRect(50, 50, canvas.width, canvas.height)

  //   ctx.fillStyle = "white";
  //   ctx.font = "50px Arial"
  //   ctx.fillText("This is a text", 10, 50)

  //   ctx.lineWidth = "1"
  //   ctx.strokeStyle = "black"
  //   ctx.font = "20px Arial"
  //   ctx.strokeText("Hello world", 300, 30)

  //   ctx.beginPath()
  //   ctx.moveTo(50, 50)
  //   ctx.lineTo(150, 50)
  //   ctx.lineTo(100, 200)
  //   ctx.closePath()
  //   ctx.fill()
  //   ctx.stroke()

  //   ctx.beginPath()
  //   ctx.rect(200, 100, 300, 200)
  //   ctx.stroke()

  //   ctx.beginPath()
  //   ctx.arc(100, 300, 100, 10, 100)
  //   ctx.stroke()
  // }, [])

  return (
    <main>
      <h1>Settings will be updated</h1>
      <canvas 
        ref={canvasRef}
        width={400}
        height={400}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        onMouseUp={stopDrawing}
        style={{
        // width: "20rem",
        // height: "20rem",
        border: ".1rem solid black"
      }}>

      </canvas>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={() => setIsErasing(prev => !prev)}>Eraser</button>
    </main>
  )
}

export default page
