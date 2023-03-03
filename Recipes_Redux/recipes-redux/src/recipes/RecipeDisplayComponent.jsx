import { useSelector } from "react-redux"

export const RecipeDisplayComponent = (props) => {

    const recipes = useSelector(state => state.recipe.recipes)
    const {title, instructions, cookTime, prepTime, ingredients} = props.recipe

    return (
        <>
        <div className="bg-dark text-light border border-light rounded m-2 p-3">
            <div className="d-flex flex-row justify-content-between">
                <h3>{title}</h3>
                <div>
                    <span class="badge text-bg-dark border border-warning mx-2"><i class="bi bi-clock"></i> {prepTime}'</span>
                    <span class="badge text-bg-dark border border-danger"><i class="bi bi-fire"></i> {cookTime}'</span>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column me-5">
                    <h4>Ingredients</h4>
                    <hr />
                    <p>{ingredients}</p>
                </div>
                <div className="d-flex flex-column ms-5">
                    <h4>Instructions</h4>
                    <hr />
                    <p>{instructions}</p>
                </div>
            </div>
            <hr />
        </div>
        </>
    )
}