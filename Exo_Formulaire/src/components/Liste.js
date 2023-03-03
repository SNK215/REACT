import { Component } from "react";
import { getInfosClientsFromApi } from "../services/data.service";
import { Client } from "./Client";
import { Formulaire } from "./Formulaire";

export class Liste extends Component {
    constructor(props){
        super(props)
        this.state = {
            clients : []
        }
    }

    componentDidMount(){
        getInfosClientsFromApi().then(res => {
            this.setState({clients : [...res.data]})
        })
    }

    insertionStateParent = () => {
        console.log("remontée parent");
    }

    render(){
        return(
            <>
                <Formulaire insertionStateParent={this.insertionStateParent} clients={this.state.clients} formInputOnChange={this.formInputOnChange}></Formulaire>
                <hr/>
                <h1>Ma liste de clients :</h1>
                {
                    this.state.clients.length == 0 ? <div>En cours de chargement ...</div>
                    :
                    (
                        <>
                        {this.state.clients.map((e,i) => <Client key={e.id} client={e} ></Client>) }
                        </>
                    )
                }
            </>
        )
    }
}