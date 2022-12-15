import { useState } from 'react'
import './App.css'

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);

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

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App