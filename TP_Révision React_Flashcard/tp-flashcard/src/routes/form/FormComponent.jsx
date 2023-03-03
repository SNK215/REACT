import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFlashcards } from "../flashcard/flashcardSlice"
import { useNavigate } from "react-router-dom"

const FormComponent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const flashcards = useSelector(state =>state.flashcardSlice.flashcards)
    const questionRef = useRef()
    const responseRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()

        const question = questionRef.current.value
        const response = responseRef.current.value
        const id = flashcards.length + 1

        const flashcard = {id, question, response}

        dispatch(setFlashcards([...flashcards, flashcard]))
        navigate("/flashcard/"+flashcard.id)
    } 

    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="bg-dark text-light w-75 p-3 m-3 rounded">
                <h3>Ajout d'une flashcard</h3>
                <hr />
                <form onSubmit={handleForm}>
                    <label htmlFor="question" className="form-label">Question :</label>
                    <input type="text" className="form-control" ref={questionRef} required/>
                    <label htmlFor="response" className="form-label">Réponse :</label>
                    {/* <input type="text" className="form-control" ref={responseRef} required/> */}
                    <textarea className="form-control" cols="30" rows="5" ref={responseRef} style={{resize:"none"}}></textarea>
                    <button className="btn btn-primary mt-3">Valider</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default FormComponent