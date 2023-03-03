import { useDispatch, useSelector } from "react-redux";
import { setSignUp, setSignIn } from "./authSlice"
import { useRef } from "react"

export const SignFormComponent = (props) => {
    
    const dispatch = useDispatch()
    const signType = useSelector(state => state.auth.signFormMode)
    const emailRef = useRef()
    const passwordRef = useRef()
    const isLogged = useSelector(state =>state.auth.isLogged)
    
    const handleForm = (event) => {
        console.log("SignForm Submitted");
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

        emailRef.current.value = ""
        passwordRef.current.value = ""

        props.onSubmit(credentials)
    }

    return (
        <>
        <div>
            <form onSubmit={handleForm}>
                <label className="form-label" htmlFor="email">Adresse mail :</label>
                <input className="form-control" type="email" required ref={emailRef}/>
                <label className="form-label" htmlFor="password">Mot de passe :</label>
                <input className="form-control" type="password" required ref={passwordRef}/>
                {isLogged && <span><strong>Vous êtes connecté !</strong> Vous pouvez fermer la fenêtre</span>}
                <button className="btn btn-outline-primary w-100 my-2">Valider</button>
            </form>
        {signType === "Sign In"? <button className="btn btn-outline-info w-100" onClick={()=>dispatch(setSignUp())}>S'inscrire</button> : <button className="btn btn-outline-info w-100"  onClick={()=>dispatch(setSignIn())}>Se connecter</button> }
        </div>
        </>
    )
}