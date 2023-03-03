import { Component } from "react";

export class Formulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: {
                id:1,
                firstname: "",
                lastname: "",
                phone:"",
                status:true,
                address:{
                    street:"",
                    postCode:"",
                    city:""
                }
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.insertionStateParent()
        this.setState({ clients: {id:"", firstname : "", lastname :"", phone:"", street:"", postCode:"", city:""}})
        e.target.reset();
    }

    formInputOnChange = (e) => {
        const tmpClient = {...this.state.client}
        tmpClient[e.target.getAttribute("name")] = e.target.value
        this.setState({client : {...tmpClient}})
        console.log(tmpClient);
    }

    render() {

        return (
            <>
                <h1>Formulaire d'inscription</h1>
                <form onSubmit={this.submitForm}>
                    <span>Votre prénom:</span>
                    <input type="text" name="firstname" onChange={this.formInputOnChange}></input>
                    <span>Votre nom:</span>
                    <input type="text" name="lastname" onChange={this.formInputOnChange}></input>
                    <span>Votre téléphone:</span>
                    <input type="text" name="phone" onChange={this.formInputOnChange}></input>
                    <span>Votre rue:</span>
                    <input type="text" name="street" onChange={this.formInputOnChange}></input>
                    <span>Votre code postal:</span>
                    <input type="text" name="postCode" onChange={this.formInputOnChange}></input>
                    <span>Votre ville:</span>
                    <input type="text" name="city" onChange={this.formInputOnChange}></input>
                    <button>Envoyer</button>
                </form>
            </>
        )
    }
}