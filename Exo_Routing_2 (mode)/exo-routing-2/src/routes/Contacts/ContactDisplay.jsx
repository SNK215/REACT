import { Link } from "react-router-dom"

const ContactDisplay = (props) => {

    const {id, nom, prenom, email, telephone} = props.contact
    const deleteLink = `/form?mode=delete&id=${id}`

    return (
        <>
        <div className="bg-dark text-light border border-light rounded p-3 m-2">
            <div className="d-flex flex-row justify-content-between">
                <h3>{nom} {prenom}</h3>
                <div>
                    <Link to="/form?mode=edit"><button className="btn btn-warning mx-2"><i className="bi bi-pencil-square"></i></button></Link>
                    <Link to={deleteLink}><button className="btn btn-danger"><i className="bi bi-trash"></i></button></Link>
                </div>
            </div>
            <hr />
            <span><strong>Adresse mail:</strong> {email}</span><br></br>
            <span><strong>Téléphone:</strong> {telephone}</span>
        </div>
        </>
    )
}

export default ContactDisplay