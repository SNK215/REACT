import { Outlet, NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {

    const isLogged = useSelector(state => state.authSlice.isLogged)

    return (
        <>
        <header>
        <nav className="navbar bg-dark text-light navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/home"}>TP adresse</NavLink>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/home"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/contacts"}>Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/adresseForm"}>Adresses</NavLink>
                    </li>
                </ul>
                {!isLogged && <Link to="/authentication" className="ms-auto"><button className="btn btn-primary">Connexion</button></Link>}
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

export default Navbar 