import '../styles/Cart.css'
import { useState, useEffect } from 'react'


function Cart({ cart, updateCart, activeCategory, setActiveCategory }) {
	/*
	const [cart, updateCart] = useState(0)
	Décomposition, parce qu'il s'agit d'un tableau et non d'un objet.

	useState => renvoie une paire de valeurs dans un tableau de 2 éléments, 
	que nous récupérons dans les variables cart et updateCart (dans notre exemple).
	- le premier élément est la valeur actuelle
	- le deuxième est une fonction qui permet de la modifier
	- paramètre passé entre parenthèses à useState (0) est l'état initial de notre state
	*/

	const [isOpen, setIsOpen] = useState(true)
	const items = Object.keys(cart)
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
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