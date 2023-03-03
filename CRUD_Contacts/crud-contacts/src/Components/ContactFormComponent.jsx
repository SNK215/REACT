import { useRef } from "react"

export const ContactFormComponent = (props) => {

    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const birthdayRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const telephoneRef = useRef()
    const avatarRef = useRef()


    const handleForm = (event) => {
        event.preventDefault()

        const lastname = lastNameRef.current.value
        const firstname = firstNameRef.current.value
        const birthday = birthdayRef.current.value
        const age = ageRef.current.value
        const email = emailRef.current.value
        const telephone = telephoneRef.current.value
        const avatar = avatarRef.current.value

        if (props.isModifying) {
            props.modifyContact(lastname, firstname, birthday, age, email, telephone, avatar)
        } if (!props.isModifying) {
            props.addContact(lastname, firstname, birthday, age, email, telephone, avatar)
        }
    }

    return(
        <>
        <div className="">
            {props.isModifying ? <h2>Modifier un contact</h2> : <h2>Ajouter un contact</h2>}
            <form onSubmit={handleForm}>
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="lastname">Nom</label>
                        <input className="form-control" type="text" required ref={lastNameRef}/>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="firstname" ref={firstNameRef}>Prénom</label>
                        <input className="form-control" type="text" required ref={firstNameRef}/>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="birthday">Date de naissance</label>
                        <input className="form-control" type="date" required ref={birthdayRef}/>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="age">Age</label>
                        <input className="form-control" type="number" required ref={ageRef}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="email">Adresse mail</label>
                        <input className="form-control" type="email" required ref={emailRef}/>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="telephone">Numéro de tél.</label>
                        <input className="form-control" type="text" required ref={telephoneRef}/>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="avatar">Avatar (URL de l'image)</label>
                        <input className="form-control" type="text" required ref={avatarRef}/>
                    </div>
                </div>
                <div className="row">
                    <button className="btn btn-primary m-2">Valider</button>
                </div>
            </form>
        </div>
        </>
    )
}