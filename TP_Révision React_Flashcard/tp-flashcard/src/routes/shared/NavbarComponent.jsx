import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const NavbarComponent = () => {

    const flashcards = useSelector(state =>state.flashcardSlice.flashcards)
    const randomNumber = Math.floor(Math.random() * flashcards.length) + 1

    return (
        <>
        <header>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><i className="bi bi-globe"></i> Accueil eFlashcart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/form" className="nav-link"><i className="bi bi-plus-circle"></i> Ajouter une flashcard</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/flashcard/"+randomNumber}><i className="bi bi-shuffle"></i> Flashcard au hasard</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default NavbarComponent