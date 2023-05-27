import './SingleCard.css'

export default function SingleCard({card}) {
  return (
    <div className="card">
        <div>
        <img className="front" src={card.src} alt="card front"/>
        <img className="back" src="/img/pexels-jonny-lew-1121123.jpg" alt="card back"/>
        </div>
    </div>
  )
}