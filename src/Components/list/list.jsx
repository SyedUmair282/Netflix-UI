import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react'
import './list.scss'
import Listitem from './listitems/listitem';
const List = () => {
  const [slideIndex,setslideIndex]=useState(0);

  const listref=useRef();
  const handleclick=(direction)=>{
    //listref.current.getBoundingClientRect() function that gives tags height, width and x, y axis(translate)
    let distance=listref.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideIndex > 0){
      setslideIndex(slideIndex - 1)
      //by default distance is 0 that why 1st tym it get only 230
      listref.current.style.transform=`translateX(${230 + distance}px)`
      console.log(distance);
    }
    if(direction === "right" && slideIndex < 1){
      setslideIndex(slideIndex + 1)
      //by default distance is 0 that why 1st tym it get only 230
      listref.current.style.transform=`translateX(${-230 + distance}px)`
      console.log(distance);
    }
  }
  return (
    <div className='list' >
        <span className="listtitle">
            Continue to watch
        </span>
        <div className="wrapper">
            {slideIndex > 0 && (
              <ArrowBackIosOutlined className='slider left' onClick={()=>handleclick("left")}/>
            )}
            <div className="container" ref={listref}>
              <Listitem/>
              <Listitem/>      
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
              <Listitem/>
            </div>
            {slideIndex < 1 &&(
              <ArrowForwardIosOutlined className='slider right' onClick={()=>handleclick("right")}/>
            )}
        </div>
    </div>
  )
}

export default List;