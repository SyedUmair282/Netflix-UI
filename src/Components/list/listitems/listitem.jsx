import React from 'react'
import './listitem.scss'

import { PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from '@material-ui/icons';
const listitem = () => {
  return (
    <div className='listitem'>
        <img src="https://images.unsplash.com/photo-1639224101391-ea1027959849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="icons">
          <span className='desc'>Scooby doo! Curse of the lake monster</span>
        <span className='time'>1 hour 14 mins</span>
          <span  className='age'>16+</span>
          <button className='play'><PlayArrow/> Play</button>
        </div>
        {/* <div className="topinfo">
          <span>1 hour 14 mins</span>
          <span>+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem culpa veniam deserunt autem non repellat adipisci voluptate perspiciatis nisi quos eveniet facilis, eum iure corporis omnis iste accusantium sequi.
        </div>
        <div className="genre">
          Action
        </div> */}
        

        
    </div>
  )
}

export default listitem