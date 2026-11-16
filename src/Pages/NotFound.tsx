import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Back to start</Link>
    </section>
  )
}