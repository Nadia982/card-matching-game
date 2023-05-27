import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/pexels-jill-burrow-6858608.jpg", alt: "field of green grass" },
  { src: "/img/pexels-luis-lima-10514728.jpg", alt: "stormy sky" },
  { src: "/img/pexels-oliver-sjöström-1078981.jpg", alt: "beach scene" },
  { src: "/img/pexels-tobias-bjørkli-1900203.jpg", alt: "snowy field" },
  { src: "/img/pexels-pixabay-459271.jpg", alt: "orange sky" },
  { src: "/img/pexels-todd-trapani-1420440.jpg", alt: "sun-soaked field" },
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
