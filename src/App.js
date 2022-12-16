import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false},
]

function App() {
  const [cards, setCards] = useState([]);
  let [moves, setMoves] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null)

  const duplicateCards= () => cardImages.reduce((newCards,card)=>{
            return [...newCards, 
                    {...card, id: Math.random()},
                    {...card, id: Math.random()}
                  ]
            },[]);

  const shuffleCards = () =>{
     const sortedCards = duplicateCards().sort(() => Math.random() - 0.5)
     setCards(sortedCards)
     setMoves(0)
  }

  const selectCard = (card) => {
    if(choiceOne === null){
      setChoiceOne(card)
    } else {
      setChoiceTwo(card)
    }
  }

  const compareChoices = () =>{
    if(choiceOne.src === choiceTwo.src){
        console.log("match");
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              card.matched = true
            }
            return card
          })
        })
        reset()
    } else {
      setTimeout(()=> {
        reset()
      }, 2000)
    }
  }

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves(moves++);
  }

  useEffect(() => {
    if(choiceTwo){
      compareChoices()
    }
  }, [choiceTwo])

  console.log(cards)
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card =>
              <Card card={card} 
                    key={card.id}
                    selectCard={selectCard}
                    covered={card !== choiceOne && card !== choiceTwo && !card.matched}/>
          )}
      </div>
    </div>
  );
}

export default App