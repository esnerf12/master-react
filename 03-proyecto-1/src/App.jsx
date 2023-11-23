import './App.css'
import { Cards } from './components/Cards.jsx'
import { Search } from './components/Search.jsx'
import { AddMovie } from './components/AddMovie.jsx'

function App() {
  return (
    <>
      <div className="layout">
      
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>
        
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <section className="content">
            <Cards></Cards>
        </section>

        <aside className="lateral">
            <Search></Search>
            <AddMovie></AddMovie>
        </aside>

        <footer className="footer">
            &copy; Master en React - <a href="#">andersontovar.com</a> 
        </footer>

      </div>
    </>
  )
}

export default App
