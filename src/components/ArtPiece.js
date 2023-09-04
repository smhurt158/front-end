import React from 'react'
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useState } from 'react';
const ArtPiece = ({source, title, description, rows = 2, cols = 2}) => {
    const handleMouseEnter = () => {
        setDescriptionVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDescriptionVisible(false);
      };
      const [descriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <ImageListItem key="1" cols={cols} rows={rows} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
            src={source}
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