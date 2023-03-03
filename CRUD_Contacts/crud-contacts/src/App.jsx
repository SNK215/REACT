import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/NavbarComponent';
import { useState, useRef } from 'react';
import { API_KEY } from "./API_KEY";
import ModalComponent from "./Components/ModalComponent"
import { createPortal } from 'react-dom';
import { ContactComponent } from './Components/ContactComponent';
import { ContactFormComponent } from './Components/ContactFormComponent';
import { ContactListComponent } from './Components/ContactListComponent';
import Contact from "./Classes/Contact"
import { useEffect } from 'react';

function App() {

  //URL de la BDD Realtime Database
  const BASE_DB_URL = "https://m2i-demo-16a85-default-rtdb.europe-west1.firebasedatabase.app/"
  //Pour savoir si l'utilisareur est en train de se connecter
  const [isLogging, setIsLogging] = useState(false)
  //Pour savoir si l'utilisateur est connecté
  const [isLogged, setIsLogged] = useState(false)
  //Pour savoir si on modifie un contact
  const [isModifying, setIsModifying] = useState(false)
  const [idContactToModify, setIdContactToModify] = useState("")
  //Pour gérer la visibilité de la modal
  const [modalVisible, setModalVisible] = useState(false)
  //Pour manipuler les contacts 
  const [contacts, setContacts] = useState([])
  //Pour afficher formulaire d'ajout de contact
  const [formVisible, setFormVisible] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  //Fonction pour gérer la connexion et l'inscription
  const handleForm = async (event) => {
    event.preventDefault();
      
      let BASE_URL = ""
      // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
      if (isLogging) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
      } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
      }
  
      try {
        const response = await fetch(
          BASE_URL,{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify ({
              email : emailRef.current.value,
              password : passwordRef.current.value,
              returnSecureToken : true
            })
          })
      // Si la réponse n'a pas comme code de retour un OK (200), alors on va envoyer une erreur
      if(!response.ok) {
        throw new Error("Il y a eu une erreur !")
      } 
  
      // Si la réponse est concluante, il va nous falloir extraire les données de la réponse (le body). Pour ce faire, on utilise la méthode asynchrone .json()
      const data = await response.json()
      
      // Dans la réponse se trouve un token qui nous servira par la suite pour faire notre requêtes de gestion de la base de données Firestore. Pour le moment, l'endroit le plus utile où le stocker est le stockage local de notre navigateur
      localStorage.setItem('token', data.idToken)
  
      emailRef.current.value = ""
      passwordRef.current.value = ""
  
      setIsLogged(true)
      setModalVisible(false)
      } catch (error) {
        console.error(error.message);
      }
  }

  //Pour gérer la déconnexion
  const logOutHandler = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  //Fonction pour ajouter un contact
  const addContact =  async (lastname, firstname, birthday, age, email, telephone, avatar) => {
    setFormVisible(false)
    const newContact = new Contact(firstname, lastname, birthday, age, email, telephone, avatar)
    setContacts([...contacts, newContact])
    console.log("Contact ajouté:", newContact);

    try {
      const token = localStorage.getItem("token")
      if (token) {
        const response = await fetch(`${BASE_DB_URL}contact.json?auth=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newContact)
        })
        if(!response.ok) {
          throw new Error("Il y a eu une erreur !")
        } 
  
        const data = await response.json()
        setContacts([...contacts, {id:data.name, ...newContact}])
        refreshContacts()
        console.log(contacts);
      }

    } catch (error) {
      console.error(error.message)
    }
  }

  const refreshContacts = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}contact.json`)

      if (!response.ok) {
        throw new Error("Il y a eu une erreur lors de la requête GET !")
      }

      const data = await response.json()

      const tmpContacts = []
      for (const key in data) {
        tmpContacts.push({id: key, ...data[key]})
      }
      setContacts(tmpContacts)

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    refreshContacts()
  }, [])

  const deleteContact = async (contactId) => {
      const contactFound = contacts.find(contact => contact.id ===contactId)
      if (contactFound) {
        try {
          const token = localStorage.getItem("token")
          if (token) {
            const response = await fetch (`${BASE_DB_URL}contact/${contactId}.json?auth=${token}`, {
              method: "DELETE"
            })

            if (!response.ok) {
              throw new Error("Erreur lors de la requête DELETE !")
            }

            setContacts([...contacts.filter(contact => contact !== contactFound)])
          }
        } catch (error) {
          console.error(error.message)
        }
      }
  }

  const modifyContact = async (lastname, firstname, birthday, age, email, telephone, avatar) => {
    setIsModifying(true)

  }

  return (
    <>
    <Navbar>
      {isLogged ? <span className='mx-3'>Vous êtes connecté</span> : <span className='mx-3'>Vous n'êtes pas connecté</span>}
      <button className="btn btn-primary" onClick={() => isLogged ? logOutHandler() : setModalVisible(true)}>{isLogged ? 'Déconnexion' : 'Connexion / Inscription'}</button>
    </Navbar>

    {modalVisible && createPortal(<ModalComponent closeModal={() => setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
          <h3>{isLogging ? 'Connexion' : 'Inscription'}</h3>
          <button onClick={() =>setModalVisible(false)} className="btn btn-outline-dark rounded"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <form onSubmit={handleForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="text" required ref={emailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe : </label>
            <input type="password" required ref={passwordRef} className="form-control" />
          </div>
          <div className="text-end">
            <button type="button" className="btn btn-outline-info me-2" onClick={() => setIsLogging(!isLogging)}>Afficher {isLogging ? 'Inscription' : 'Connexion'}</button>
            <button className="btn btn-primary">{isLogging ? 'Connexion' : 'Inscription'}</button>
          </div>
        </form>
      </ModalComponent>, document.getElementById("modal-root"))}

      {contacts.length == 0 ? 

        <div className='d-flex flex-column align-items-center m-5'>
          <i className="bi bi-exclamation-octagon"></i>
          <span>Aucun contact à afficher</span>
          <span>Veuillez {!isLogged && "vous connecter et " }ajouter un contact</span>
          {isLogged && <button onClick={()=>setFormVisible(true)} className='btn btn-primary m-2'><i className="bi bi-person-lines-fill mx-1"></i> Ajouter un contact</button>}
          {formVisible && <ContactFormComponent addContact={addContact}></ContactFormComponent>}
        </div> : 

        <div className='d-flex flex-column align-items-center m-3'>
            {isLogged && <button onClick={()=>setFormVisible(true)} className='btn btn-primary m-2'><i className="bi bi-person-lines-fill mx-1"></i>Ajouter un contact</button>}
            {formVisible && <button onClick={()=>setFormVisible(false)} className='btn btn-danger'>Annuler</button>}
            {formVisible && <ContactFormComponent addContact={addContact}></ContactFormComponent>}
            {isModifying && <ContactFormComponent isModifying={isModifying} modifyContact={modifyContact}></ContactFormComponent>}

          <ContactListComponent>
            {contacts.map((contact, key) => (<ContactComponent key={key} isLogged={isLogged} modifyContact={modifyContact} deleteContact={deleteContact} contact={contact}></ContactComponent>))} 
          </ContactListComponent>
        </div>
      }
    </>
  );
}

export default App;
