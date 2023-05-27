import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/pexels-jill-burrow-6858608.jpg" },
  { src: "/img/pexels-luis-lima-10514728.jpg" },
  { src: "/img/pexels-oliver-sjöström-1078981.jpg" },
  { src: "/img/pexels-tobias-bjørkli-1900203.jpg" },
  { src: "/img/pexels-pixabay-459271.jpg" },
  { src: "/img/pexels-todd-trapani-1420440.jpg" },
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffledCards)
      setTurns(0)
  };

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card)=>(
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
