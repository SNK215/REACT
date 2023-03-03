import { useSelector } from "react-redux"
import { useRef } from "react"

export const RecipeForm = (props) => {

    const ingredients = useSelector(state =>state.recipe.ingredients)
    const titleRef = useRef()
    const instructionsRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const ingredientsRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()

        const title = titleRef.current.value
        const instructions = instructionsRef.current.value
        const cookTime = cookTimeRef.current.value
        const prepTime = prepTimeRef.current.value
        const ingredients = ingredientsRef.current.value

        const recipe = {
            title, 
            instructions,
            cookTime, 
            prepTime,
            ingredients,
            returnSecureToken: true
        }

        titleRef.current.value = ""
        instructionsRef.current.value = ""
        cookTimeRef.current.value = ""
        prepTimeRef.current.value = ""
        ingredientsRef.current.value = ""

        props.onSubmit(recipe)

    }

    return (
        <>
        <form onSubmit={handleForm}>
            <label htmlFor="title" className="form-label">Titre :</label>
            <input type="text" className="form-control" required ref={titleRef}/>
            <label htmlFor="instructions" className="form-label">Instructions :</label>
            {/* <input type="text-area" className="form-control" required ref={instructionsRef}/> */}
            <textarea className="form-control" cols="30" rows="10" required ref={instructionsRef}></textarea>
            <label htmlFor="cookTime" className="form-label">Temps de cuisson (minutes) :</label>
            <input type="number" className="form-control" required ref={cookTimeRef}/>
            <label htmlFor="prepTime" className="form-label">Temps de préparation (minutes) :</label>
            <input type="number" className="form-control" required ref={prepTimeRef}/>
            <label htmlFor="ingredients" className="form-label">Ingrédients :</label>
            <select name="ingredients" className="form-control" multiple ref={ingredientsRef}>
                <option value={ingredients[0].name}>{ingredients[0].name}</option>
                <option value={ingredients[1].name}>{ingredients[1].name}</option>
                <option value={ingredients[2].name}>{ingredients[2].name}</option>
                <option value={ingredients[3].name}>{ingredients[3].name}</option>
                <option value={ingredients[4].name}>{ingredients[4].name}</option>
            </select>
            <button className="btn btn-outline-primary w-100 mt-3">Valider</button>
        </form>
        </>
    )
}