import { Link,Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <header>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Exo routing 2</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contacts" className="nav-link">Contacts</Link>
                </div>
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