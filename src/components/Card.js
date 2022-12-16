import './Card.css'
 
 const Card = ({card, selectCard, covered}) =>{
  
  function uncover(){
      selectCard(card)
  }

    return(
        <div className='card'>
                <div>
                  {!covered && <img src={card.src} className="front" alt='card front'/>}
                  {covered && <img src="/img/cover.png" onClick={uncover} className="back" alt={card.src}/>}
                </div>
        </div>
    )
}
export default Card