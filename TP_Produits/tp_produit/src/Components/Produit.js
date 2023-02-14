import React, { Component } from 'react'
import { Magasin } from './Magasin'

export class Produit extends Component { 

    constructor(props) {
        super(props)
        this.state = {}
    }

    clickCart = (e) => {
        e.preventDefault()
        this.props.addToShoppingCart(this.props.produit.titre)
    }

    render() {
        const { id, titre, prix, description } = this.props.produit
        return (
            <div className="text-light bg-dark p-5 m-2 rounded d-flex flex-column justify-content-center">
                <h2>{id} - {titre}</h2>
                <p>{description}</p>
                <strong className="align-self-end">Prix: {prix}€</strong>
                <button className="btn btn-outline-light m-1" type="button" onClick={this.clickCart}>Ajouter au panier</button>
            </div>
        )
    }
}