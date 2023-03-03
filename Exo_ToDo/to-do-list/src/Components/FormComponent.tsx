import { ToDoItem } from "./ToDo";
import { useRef } from "react";
import { MutableRefObject } from "react";
import { FormEvent } from "react";

interface Props {

}

const FormComponent = (props : Props) => {

    const titleRef = useRef() as MutableRefObject<HTMLInputElement>
    const descriptionRef = useRef() as MutableRefObject<HTMLInputElement>
    const dateRef = useRef() as MutableRefObject<HTMLInputElement>

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        console.log("Form validé");
    }

    return (
        <>
            <div className="bg-dark text-light p-3 w-25 h-50 rounded">
                <h1>ToDoForm</h1>
                <hr />
                <form onSubmit={handleForm}>
                    <div>
                        <label className="form-control" htmlFor="title">Titre: </label>
                        <input type="text" required ref={titleRef} />
                    </div>
                    <div>
                        <label className="form-control" htmlFor="description">Description: </label>
                        <input type="text" required ref={descriptionRef} />
                    </div>
                    <div>
                        <label className="form-control" htmlFor="date">Date: </label>
                        <input type="date" required ref={dateRef} min={1} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            
        </>
        )

}

export default FormComponent