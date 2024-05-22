import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	/* 
	Décomposition, parce qu'il s'agit d'un tableau et non d'un objet.

	useState => renvoie une paire de valeurs dans un tableau de 2 éléments, 
	que nous récupérons dans les variables cart et updateCart (dans notre exemple).
	- le premier élément est la valeur actuelle
	- le deuxième est une fonction qui permet de la modifier
	- paramètre passé entre parenthèses à useState (0) est l'état initial de notre state
	*/

	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}>
					Fermer
			</button>
			<h2>Panier</h2>
			<div>
				Monstera : {monsteraPrice} €
				<button onClick={() => updateCart(cart + 1)}>
					Ajouter
				</button>
			<h3>Total : {monsteraPrice * cart} €</h3>
			</div>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}>
					Ouvrir le panier
			</button>
		</div>
		
	)
}

export default Cart