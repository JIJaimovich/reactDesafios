import CartWidget from "../CartWidget/CartWidget";



function NavBar() {
  return (
    <header className="App-header">
      <img className="Img-NavBar" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react" />
      <p>La Tienda</p>
      <ul className="Lista-NavBar">
        <li className="Item-Lista-NavBar">
          <a className="Enlaces-Navbar Activo" href="https://github.com/JIJaimovich/reactDesafios" target="_blank">Inicio</a>
        </li>
        <li className="Item-Lista-NavBar">
          <a className="Enlaces-Navbar" href="https://github.com/JIJaimovich/reactDesafios" target="_blank">
            Productos
          </a>
        </li>
        <li className="Item-Lista-NavBar">
          <a className="Enlaces-Navbar" href="https://github.com/JIJaimovich/reactDesafios" target="_blank">
            Nosotros
          </a>
        </li>
      </ul>
      <> <CartWidget />
      </>
    </header>
  )
}
export default NavBar;