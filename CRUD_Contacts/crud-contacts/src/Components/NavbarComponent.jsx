export const Navbar = (props) => {
    
    return(
        <>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary text-light" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">TP : CRUD Contacts</a>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        {props.children}
                    </div>
                </div>
            </nav>
        </>
    )
} 