import classes from './modalRecipe.module.css'

export const ModalRecipe = (props) => {

    const bgClickHandler = (event) => {
        if (event.currentTarget === event.target) {
            props.onClose()
        }
    }

    return (
        <div className={classes.modal} onClick={bgClickHandler}>
            <div className={classes.modalContent}>
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Ajouter une recette</h3>
                    <button onClick={() => props.onClose()} className="btn btn-outline-dark rounded-circle">
                    <i className="bi bi-x" ></i>
                    </button>
                </div>
                <hr />
                {props.children}
            </div>
        </div>
    )
}