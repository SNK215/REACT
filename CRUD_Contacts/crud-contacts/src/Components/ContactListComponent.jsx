export const ContactListComponent = (props) => {

    return(
        <>
        <div className="bg-dark text-light w-50 h-75 rounded p-3">
            <h1 className="display-3">Contacts</h1>
            <hr />
            {props.children}
        </div>
        </>
    )
}