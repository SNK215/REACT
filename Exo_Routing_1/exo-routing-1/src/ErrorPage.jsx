import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <>
        <h1>Erreur {error.status}</h1>
        <h2>{error.data}</h2>
        </>
    )
}

export default ErrorPage