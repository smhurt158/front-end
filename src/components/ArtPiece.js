import React from 'react'
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useState } from 'react';
const ArtPiece = ({id, title, description, rows = 2, cols = 2}) => {
    const handleMouseEnter = () => {
        setDescriptionVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDescriptionVisible(false);
      };
      const [descriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <ImageListItem key="1" cols={cols} rows={rows} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e)=>window.location.href = './image/' + id}>

        <img
            src={"./images/" + id + ".png"}
            alt={title}
            loading="lazy"
        />
        {descriptionVisible?
            <ImageListItemBar
                title={title}
                subtitle={description}
            />
            :
            ""
        }
        
    </ImageListItem>
  )
}

export default ArtPiece