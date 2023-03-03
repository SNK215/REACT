import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './Components/NavbarComponents';
import { useDispatch, useSelector } from "react-redux";
import { setIsDisplayed } from "./shared/modalSlice";
import { SignFormComponent } from './auth/SignFormComponent';
import { ModalComponent } from './shared/ModalComponent';
import { createPortal } from 'react-dom';
import { BASE_DB_URL, SIGN_IN_URL, SIGN_UP_URL } from "./firebaseConfig";
import { setSignUp, setSignIn, setIsLogged } from "./auth/authSlice"
import { RecipeListComponent } from './recipes/RecipeListComponent';
import { setRecipes } from "./recipes/recipeSlice"
import { ModalAlbum} from './recipes/ModalAlbum';
import { setModalRecipeDisplayed } from "./recipes/modalRecipeSlice"
import { RecipeForm } from './recipes/RecipeForm';
import { RecipeDisplayComponent } from './recipes/RecipeDisplayComponent';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()
  const isDisplayed = useSelector(state => state.modal.isDisplayed)
  const signFormMode = useSelector(state =>state.auth.signFormMode)
  const isLogged = useSelector(state =>state.auth.isLogged)
  const recipes = useSelector(state =>state.recipe.recipes)
  const isRecipeFormDisplayed = useSelector(state=>state.modalRecipeSlice.isDisplayed)

  const signFormSubmitHandler = async (credentials) => {
    try {
      const URL = signFormMode === "Sign In" ? SIGN_IN_URL : SIGN_UP_URL

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        throw new Error("Il y a eu un problème lors de " + signFormMode === 'Sign In' ? "la connexion" : "l'enregistrement")
      }

      const data = await response.json() // Dans l'objet data, on aura un JSON qui contiendra plusieurs infos. Celle qui nous intéresse est le .idToken, qui est le token à utiliser pour nos requêtes API de Base de Données 

      localStorage.setItem('token', data.idToken) // Pour le conserver, on le met dans le stockage local du navigateur
      dispatch(setIsLogged(true))

    } catch (error) {
      console.error(error.message);
    }
  }

  const logOutHandler = () => {
    console.log("Déconnexion");
    localStorage.removeItem('token')    
    dispatch(setIsLogged(false))
  }

  const refreshRecipes = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}recipes.json`)

      if (!response.ok) {
        throw new Error("Il y a eu un problème lors de la récupération des recettes.")
      }

      const data = await response.json()

      const tmpArray = []

      for (const key in data) {
        tmpArray.push({id: key, ...data[key]})
      }

      dispatch(setRecipes(tmpArray))
      console.log("Recipes récupérées depuis la BDD");

    } catch (error) {
      console.error(error.message);
    }
  }

  const addRecipe = async (recipe) => {
    if (isLogged) {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await fetch(`${BASE_DB_URL}recipes.json?auth=${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
          })

          if (!response.ok) {
            throw new Error("Il y a eu un soucis lors de l'ajout d'une recette.")
          }

          const data = await response.json()

          dispatch(setRecipes([...recipes, {id: data.name, ...recipe}]))
          console.log("Recette ajoutée !");

        } catch (error) {
          console.error(error.message);
        }
      }
    }
  }

  useEffect(() => {
    refreshRecipes()
  }, [])
  
  return (
    <div className="App">

      <header>
        <NavbarComponent logOut={logOutHandler}/>
      </header>

      {isDisplayed && createPortal(<ModalComponent onClose={()=>dispatch(setIsDisplayed(false))}>
        <SignFormComponent onSubmit={signFormSubmitHandler} />
        </ModalComponent>, document.getElementById("modal-root"))}

      {isRecipeFormDisplayed && createPortal(<ModalAlbum onClose={()=>dispatch(setModalRecipeDisplayed(false))}>
      <RecipeForm onSubmit={addRecipe} />
      </ModalAlbum>, document.getElementById("modalAlbum-root"))}

      <RecipeListComponent>
        {recipes.map((recipe) => (<RecipeDisplayComponent key={recipe.id} recipe={recipe}></RecipeDisplayComponent>))} 
      </RecipeListComponent>
    </div>
  );
}

export default App;
