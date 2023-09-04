import React, { useEffect, useState } from 'react'
import ImageList from "@mui/material/ImageList";
import ArtPiece from '../components/ArtPiece';
import art1 from '../images/art1.png';
import art2 from '../images/art2.png';
import art3 from '../images/art3.png';
import art4 from '../images/art4.png';
import art5 from '../images/art5.png';
import art6 from '../images/art6.png';
import art7 from '../images/art7.png';
import art8 from '../images/art8.png';
const images = [
   {
      source: art1,
      title: "Pic of V",
      description: "sexy"
    },
    {
      source: art2,
      title: "Pic of V",
      description: "sexy",
      //width:1,
      //height:1,
    },
    {
      source: art3,
      title: "Pic of V",
      description: "sexy",
      //width:1,
      //height:2,
    },
    {
      source: art4,
      title: "Pic of V",
      description: "sexy"
    },
    {
      source: art5,
      title: "Pic of V",
      description: "sexy",
      //width:1,
      //height:2,
    },
    {
      source: art6,
      title: "Pic of V",
      description: "sexy",
      width:4,
      height:2,
    },
    {
      source: art7,
      title: "Pic of V",
      description: "sexy"
    },
    {
      source: art8,
      title: "Pic of V",
      description: "sexy",
      //width:2,
      //height:1,
    },
  ];
const Gallery1 = () => {
   let [windowWidth, setWindowWidth] = useState(window.innerWidth);
   useEffect(()=>{
     window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
   },[])
   return (
      <div className='gallery'>
         <ImageList sx={{ width: "80%"}} cols={Math.ceil(6*windowWidth/2000)} rowHeight={.8*windowWidth/Math.ceil(6*windowWidth/2000)} variant="quilted">
            
            {images.map((image, index)=>{
               return <ArtPiece key={index} source={image.source} title={image.title} description={image.description} rows={image.height} cols={Math.min(Math.ceil(6*windowWidth/2000),image.width?image.width:2)}></ArtPiece>
            })}
               
         </ImageList>
      </div>
    
  )
}

export default Gallery1