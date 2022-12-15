 import { useState } from 'react'
import './Card.css'
 
 const Card = ({card}) =>{
  const [cover, setCover] = useState(true)
  
  function uncover(){
      setCover(false)
  }

    return(
        <div className='card'>
                <div>
                  {!cover && <img src={card.src} className="front" alt='card front'/>}
                  {cover && <img src="/img/cover.png" onClick={uncover} className="back" alt='card back'/>}
                </div>
        </div>
    )
}
export default Card