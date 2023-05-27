import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/pexels-jill-burrow-6858608.jpg", alt: "field of green grass", matched: false},
  { src: "/img/pexels-luis-lima-10514728.jpg", alt: "stormy sky", matched: false},
  { src: "/img/pexels-oliver-sjöström-1078981.jpg", alt: "beach scene", matched: false},
  { src: "/img/pexels-tobias-bjørkli-1900203.jpg", alt: "snowy field", matched: false},
  { src: "/img/pexels-pixabay-459271.jpg", alt: "orange sky", matched: false},
  { src: "/img/pexels-todd-trapani-1420440.jpg", alt: "sun-soaked field", matched: false},
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffledCards)
      setTurns(0)
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare 2 selected cards
  useEffect(()=> {

    if (choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        }) 
        resetTurn()
      } else {
        setTimeout(()=>resetTurn(), 1500)
      }
    }
  }, [choiceOne, choiceTwo])

console.log(cards)

  //reset choices & increase turn 
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

//start a new game automatically
  useEffect(()=>{
    
  }, [])

  return (
    <div className="App">
      <h1>Match the Cards!</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card)=>(
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}
      </div>
      <p>Turns taken: {turns}</p>
    </div>
  );
}

export default App;
