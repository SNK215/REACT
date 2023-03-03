import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HomepageComponent = () => {

    const flashcards = useSelector(state =>state.flashcardSlice.flashcards)

    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="bg-dark text-light p-3 m-3 w-75 rounded">
                <h3>Flashcards</h3>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus magni aspernatur modi culpa magnam, tempora quidem, veritatis, rerum laboriosam at! Deserunt delectus soluta, exercitationem impedit libero eum. Quidem, ea.
                    Fuga, adipisci? Obcaecati, vero odit. Ut odio officiis autem laudantium molestias a velit, tenetur sequi dolore iure impedit explicabo minima perferendis rem commodi! Amet repellat saepe ut doloremque consequatur eveniet.
                </p>
                <hr />
                <h3>Liste des flashcards :</h3>
                <hr />
                <div className="d-flex flex-column">
                    {flashcards.map((element,key)=><Link className="my-1 display-5" key={key} to={"/flashcard/"+element.id}>Flashcard n° {element.id}</Link>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default HomepageComponent