import React from 'react'
import { useState } from 'react'
// import {FaArrowAltCircleLeft} from "react-icons"
import style from "./Carrousel.module.css"

export const Carrousel = ({images}) => {
    const [img, setImg] = useState(0)
  return (
    <div className={style.Carousel}>
        <img src={images[img].image} alt="imagen" className={style.Carrousel_IMG}/>
        {/* {images.map((image)=>(
            <img src={image.image} alt="Image" />
        ))} */}
        
    </div>
  )
}
