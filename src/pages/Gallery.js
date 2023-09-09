import React, { useEffect, useState } from 'react'
import ImageList from "@mui/material/ImageList";
import ArtPiece from '../components/ArtPiece';
const images = [
   {
      source: 'art1',
      title: "Pic of V",
      description: "sexy"
    },
    {
      source: 'art2',
      title: "Pic of V",
      description: "sexy",
      width:1,
      height:1,
    },
    {
      source: 'art3',
      title: "Pic of V",
      description: "sexy",
      width:1,
      height:1,
    },
    {
      source: 'art4',
      title: "Pic of V",
      description: "sexy",
      
    },
    {
      source: 'art5',
      title: "Pic of V",
      description: "sexy"
    },
    {
      source: 'art6',
      title: "Pic of V",
      description: "sexy",
    },
    {
      source: 'art7',
      title: "Pic of V",
      description: "sexy"
    },
    {
      source: 'art8',
      title: "Pic of V",
      description: "sexy",
    },
  ];
const Gallery1 = () => {
   let [windowWidth, setWindowWidth] = useState(window.innerWidth);
   useEffect(()=>{
     window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
   },[])
   return (
      <div className='gallery'>
         <ImageList sx={{ width: "80%"}} cols={Math.ceil(3*windowWidth/2000)*2} rowHeight={.8*windowWidth/(2*Math.ceil(3*windowWidth/2000))} variant="quilted">
            
            {images.map((image, index)=>{
               return <ArtPiece key={index} id={image.source} title={image.title} description={image.description} rows={image.height} cols={Math.min(Math.ceil(3*windowWidth/2000)*2,image.width?image.width:2)}></ArtPiece>
            })}
               
         </ImageList>
      </div>
    
  )
}

export default Gallery1