import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped}) {
    
    const handleClick = () => {
        handleChoice(card)
    }

    return (
    <div className="card">
        <div className= {flipped ? "flipped" : ""} >
        <img className="front" src={card.src} alt={card.alt}/>
        <img 
        onClick={handleClick} 
        className="back" 
        src="/img/pexels-jonny-lew-1121123.jpg" 
        alt="card back"/>
        </div>
    </div>
  )
}