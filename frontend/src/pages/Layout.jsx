import { Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="fa-solid fa-house"></Link>
        </nav>
      </header>
    </>
  )
}

export default Layout
