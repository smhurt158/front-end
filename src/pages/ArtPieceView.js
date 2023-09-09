import React from 'react'
import { useParams } from 'react-router-dom';

const ArtPieceView = ({match}) => {
    const {id} = useParams();
  return (
    <div style={{display:"grid", justifyItems:"center", height:window.innerHeight/1.25, width:"100%"}}>
        <h1>test</h1>
        <img
            style={{ width:"auto", maxHeight:"100%"}}
            src={process.env.PUBLIC_URL + "/images/"+ id + ".png"}
        ></img>
    </div>
  )
}

export default ArtPieceView