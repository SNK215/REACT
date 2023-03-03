import { NavLink, Outlet, Link } from "react-router-dom"

export const NavbarComponent = (props) => {

    return (
        <>
        <header>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary text-light" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Exo Routing 1</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link">My Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Me</Link>
                    </li>
                </ul>
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