import React, { Component } from 'react'
import { Produit } from './Produit'
import { Magasin } from './Magasin'

export class Panier extends Component { 

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { id, titre, prix, description } = this.props.panier
        return (
            <div className="text-light bg-dark p-5 m-2 rounded d-flex flex-column justify-content-center">
                <span>(dans le panier)</span>
                <h2>{id} - {titre}</h2>
                <p>{description}</p>
                <strong className="align-self-end">Prix: {prix}€</strong>
            </div>
        )
    }
}