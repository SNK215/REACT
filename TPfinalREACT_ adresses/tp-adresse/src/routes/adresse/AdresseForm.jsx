import { useRef } from "react"

const AdresseForm = () => {

    const numberRef = useRef()
    const streetRef = useRef()
    const postalCodeRef = useRef()
    const cityRef = useRef()


    const handleForm = (event) => {
        event.preventDefault()
    }

    return (
        <>
        <div className="d-flex justify-content-center">
            <form className="bg-dark text-light p-3 m-2 w-50 rounded" onSubmit={handleForm}>
                <label htmlFor="number" className="form-label">Numéro :</label>
                <input type="number" className="form-control" ref={numberRef} required/>
                <label htmlFor="street" className="form-label">Rue :</label>
                <input type="text" className="form-control" ref={streetRef} required/>
                <label htmlFor="postalCode" className="form-label">Code postal :</label>
                <input type="number" className="form-control" ref={postalCodeRef} required/>
                <label htmlFor="city" className="form-label">Ville :</label>
                <input type="text" className="form-control" ref={cityRef} required/>
                <button className="btn btn-outline-primary mt-2 w-100">Valider</button>
            </form>
        </div>
        </>
    )
}

export default AdresseForm