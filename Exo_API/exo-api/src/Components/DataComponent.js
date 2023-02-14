import { Component } from "react"
import { getData, getInfoPokeApi } from "../services/data.service"

export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        getInfoPokeApi().then(res => {
            this.setState({ data : res.data})
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.data.length == 0 ? <div>En cours de chargement ....</div>
                    :
                    (<div>
                        <div className="card text-bg-secondary mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header">Type : {this.state.data.types[0].type.name}</div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.data.name}</h5>
                            <img src={this.state.data.sprites.other.home.front_default} className="img-fluid rounded-start" alt="..."/>
                            <p className="card-text">
                                <ul>
                                    <span>Weight: {this.state.data.weight}</span>
                                    <span>Height: {this.state.data.height} </span>
                                </ul>
                                <hr/>
                                <ul>
                                    <li>{this.state.data.moves[0].move.name}</li>
                                    <li>{this.state.data.moves[1].move.name} </li>
                                    <li>{this.state.data.moves[2].move.name} </li>
                                    <li>{this.state.data.moves[3].move.name} </li>
                                </ul>
                            </p>
                        </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

