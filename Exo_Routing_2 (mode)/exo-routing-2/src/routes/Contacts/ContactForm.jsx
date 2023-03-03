import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "./contactSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {

    const { form } = useParams()
    const [searchParams] = useSearchParams()
    const mode = searchParams.get("mode")
    const id = searchParams.get("id")

    const dispatch = useDispatch()
    const contacts = useSelector(state =>state.contactSlice.contacts)

    const nomRef = useRef()
    const prenomRef = useRef()
    const emailRef = useRef()
    const telephoneRef = useRef()
    const navigate = useNavigate()

    if (mode == "edit") {
        
    }

    const handleForm = (event) => {
        event.preventDefault()

        const nom = nomRef.current.value
        const prenom = prenomRef.current.value
        const email = emailRef.current.value
        const telephone = telephoneRef.current.value
        const id = Math.floor((1 + Math.random()) * 0x10000)
        const contact = {id, nom, prenom, email, telephone}

        dispatch(setContacts([...contacts, contact]))

        navigate("/contacts")
    }

    return (
        <>
        <div className="d-flex justify-content-center">
            <form onSubmit={handleForm} className="bg-dark text-light m-3 p-2 rounded w-50">
                <h3>Ajouter un contact</h3>
                <label htmlFor="nom" className="form-label">Nom : </label>
                <input type="text" className="form-control" required ref={nomRef}/>
                <label htmlFor="prenom" className="form-label">Prénom : </label>
                <input type="text" className="form-control" required ref={prenomRef}/>
                <label htmlFor="email" className="form-label">Email : </label>
                <input type="email" className="form-control" required ref={emailRef}/>
                <label htmlFor="telephone" className="form-label">Téléphone : </label>
                <input type="text" className="form-control" required ref={telephoneRef}/>
                <button className="btn btn-outline-success my-2 w-100">Valider</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm