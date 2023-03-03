import classes from './modalAlbum.module.css'

export const ModalAlbum = (props) => {

    const bgClickHandler = (event) => {
        if (event.currentTarget === event.target) {
            props.onClose()
        }
    }

    return (
        <div className={classes.modal} onClick={bgClickHandler}>
            <div className={classes.modalContent}>
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Ajouter un album</h3>
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