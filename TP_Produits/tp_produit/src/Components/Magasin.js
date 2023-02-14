import React, { Component } from 'react'
import { Produit } from './Produit'
import { Panier } from './Panier'
export class Magasin extends Component { 

    constructor(props) {
        super(props)
        this.state = { 
            produits: [{
                id: "id 1",
                titre: "titre 1",
                prix: 42,
                description: "ceci est une description du produit"
            },
            {
                id: "id 2",
                titre: "titre 2",
                prix: 42,
                description: "ceci est une description du produit"
            },
            {
                id: "id 3",
                titre: "titre 3",
                prix: 42,
                description: "ceci est une description du produit"
            },
            {
                id: "id 4",
                titre: "titre 4",
                prix: 42,
                description: "ceci est une description du produit"
            }],
            panier: [{
                id: "id panier 4",
                titre: "titre panier 4",
                prix: 42,
                description: "panier ceci est une description du produit"
            }],
            total:42}
    }

    addToShoppingCart = (nomProduit) => {
        const tmpProduits = [...this.state.produits]
        const tmpPanier = [...this.state.panier]
        let tmpTotal = this.state.total

        for (let index = 0; index < tmpProduits.length; index++) {
            if (tmpProduits[index].titre === nomProduit) {
                tmpPanier.push(tmpProduits[index])
                tmpTotal += tmpProduits[index].prix
                console.log(tmpTotal);
            }
        }

        this.setState({ panier : [...tmpPanier]})
        this.setState({ total : tmpTotal})
    }

    emptyShoppingCart = () => {
        let tmpPanier = [...this.state.panier]
        let tmpTotal = this.state.total
        tmpTotal = 0
        tmpPanier = []
        this.setState({ total : tmpTotal})
        this.setState({ panier : [...tmpPanier]})
    }


    render() {
        const { id, titre, prix,description, total } = this.state

        return (
            <>
                <div className='text-center'>
                    <h3>Total du panier : {total}€</h3>
                    <button type="button" className='btn btn-dark' onClick={this.emptyShoppingCart}>Vider le panier</button>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-start">
                    <div className='d-flex flex-column justify-content-start'>
                        {this.state.produits.map((produit,i) => (<Produit produit={produit} key={i} addToShoppingCart={this.addToShoppingCart}></Produit>))}
                    </div>
                    <div className='d-flex flex-column justify-content-start'>
                        {this.state.panier.map((panier,i) => (<Panier panier={panier} key={i}></Panier>))}
                    </div>
                </div>
                
            </>
        )
    }
}