import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section>
      <h1>Patently</h1>
      <p>Daily patent guessing game</p>

      <Link to="/play">Start game</Link>

      <ul className="cards">
        <li>?</li>
        <li>?</li>
        <li>?</li>
        <li>?</li>
        <li>?</li>
      </ul>
    </section>
  )
}