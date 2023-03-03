import { Component } from "react"
import { getData, getInfoPokeApi } from "../services/data.service"

export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            clients : []
        }
    }

    componentDidMount(){
        getData().then(data => {
            this.setState({ clients : data })
            console.log("dataDidMount", this.state.clients);
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.clients == 0 ? <div>En cours de chargement ....</div>
                    :
                    (<div>
                        {this.state.clients.map((client,i) => (<div key={i}>{client.firstname}</div>))}
                    </div>)
                }
            </div>
        )
    }
}

