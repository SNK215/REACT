import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactDisplay from "./ContactDisplay";


const ContactList = () => {

    const contacts = useSelector(state =>state.contactSlice.contacts)

    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="bg-dark text-light m-3 p-3 rounded w-75">
                <div className="d-flex flex-row justify-content-between">
                    <h3>Liste des contats</h3>
                    <Link to="/form" className="btn btn-success">Ajouter</Link>
                </div>
                <hr />
                {contacts.map((contact, key)=><ContactDisplay key={key} contact={contact}></ContactDisplay>)}
            </div>
        </div>
        </>
    )
}

export default ContactList