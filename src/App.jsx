import { Link } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <div>Hello World</div>
      <div className="links">
        <Link to="homepage">Home page</Link>
        <Link to="shoppage">Shop page</Link>
        <Link to="cartpage">Cart page</Link>
      </div>
    </>
  )
}

export default App
