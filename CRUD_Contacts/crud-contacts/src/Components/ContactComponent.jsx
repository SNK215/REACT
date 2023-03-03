export const ContactComponent = (props) => {
    const {id, lastname, firstname, birthday, age, email, telephone, avatar} = props.contact


    return(
        <>
        <div className="bg-light text-dark p-2 m-2 rounded d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-column">
                <img src={avatar} className="rounded" alt="avatar" width="300" height="300"/>
                <div className="d-flex flex-row justify-content-center mt-2">
                    {props.isLogged && <button className="btn btn-secondary">Modifier</button>}
                    {props.isLogged && <button className="btn btn-danger ms-2" onClick={()=>props.deleteContact(id)}>Supprimer</button>}
                </div>
            </div>
            <div className="w-100 ms-3 my-2">
                <span>Prénom : {firstname}</span>
                <hr></hr>
                <span>Nom : {lastname}</span>
                <hr></hr>
                <span>Date de naissance : {birthday}</span>
                <hr></hr>
                <span>Age : {age} ans</span>
                <hr></hr>
                <span>Adresse mail : {email}</span>
                <hr></hr>
                <span>Numéro de tél. : {telephone}</span>
            </div>
        </div>
        </>
    )
}