import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

const FlashcardComponent = () => {

    const dispatch = useDispatch()
    const flashcards = useSelector(state =>state.flashcardSlice.flashcards)
    const {id} = useParams()

    const foundFlashcard = flashcards.find(element => element.id == +id )

    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="bg-dark text-light p-3 m-3 w-75 rounded">
                <h3>{foundFlashcard.id}) {foundFlashcard.question}</h3>
                <hr />
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Solution
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            {foundFlashcard.response}
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    )
}

export default FlashcardComponent