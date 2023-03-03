import { useSelector } from "react-redux"

export const RecipeDisplayComponent = (props) => {

    const recipes = useSelector(state => state.recipe.recipes)
    const {title, instructions, cookTime, prepTime, ingredients} = props.recipe

    return (
        <>
        </>
    )
}