import { useRef } from "react"

const ContactMe = (props) => {

    const nameRef = useRef()
    const subjectRef = useRef()
    const questionRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()

        const name = nameRef.current.value
        const subject = subjectRef.current.value
        const question = questionRef.current.value

        console.log("Nom:", name);
        console.log("Sujet:", subject);
        console.log("Question:", question);
    }

    return (
        <>
        <div>
            <div className="bg-dark text-light m-3 rounded w-75">
                <form onSubmit={handleForm} className="d-flex flex-column p-2">
                    <label className="from-label" htmlFor="name">Votre nom complet</label>
                    <input type="text"  className="form-control" ref={nameRef}/>
                    <label className="from-label" htmlFor="subject">Sujet de votre question</label>
                    <select name="subject" id="subject" className="form-control" ref={subjectRef}>
                        <option value="">Choisissez une option</option>
                        <option value="Billing">Facturation</option>
                        <option value="Technical">problème technique</option>
                        <option value="Other">Autre</option>
                    </select>
                    <label className="from-label" htmlFor="question"></label>
                    <textarea id="question" cols="30" rows="10" className="form-control" ref={questionRef}></textarea>
                    <button className="btn btn-outline-success w-100 my-2"> Valider</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ContactMe