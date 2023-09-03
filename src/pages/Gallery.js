import React from 'react'
import logo from "../images/pic-of-v.png"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const images = [
    
   {
      src: logo,
      width: 4,
      height: 3
    },
  ];
const Gallery1 = () => {
  return (
    <div className='gallery'>
        <ImageList sx={{ width: 1000}} cols={3} rowHeight={300} variant="quilted">
            
               <ImageListItem key="1">
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>

               <ImageListItem key="1" cols={1} rows={2}>
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>
               <ImageListItem key="1" cols={1} rows={1}>
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>
               <ImageListItem key="1">
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>

               <ImageListItem key="1" cols={1} rows={2}>
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>
               <ImageListItem key="1" cols={1} rows={1}>
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>
               <ImageListItem key="1">
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>

               <ImageListItem key="1" cols={2} rows={2}>
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>
               <ImageListItem key="1" cols={1} rows={1}>
                  <img
                     src={logo}
                     alt={"Test"}
                     loading="lazy"
                  />
               </ImageListItem>
            </ImageList>
    </div>
    
  )
}

export default Gallery1