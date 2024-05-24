import '../styles/Cart.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, emptyCart } from '../redux/actions'
import { NUMBER } from '../constants/number'
import { TEXT } from '../constants/text'


function Cart() {
	/*
	const [cart, updateCart] = useState(0)
	Décomposition, parce qu'il s'agit d'un tableau et non d'un objet.

	useState => renvoie une paire de valeurs dans un tableau de 2 éléments, 
	que nous récupérons dans les variables cart et updateCart (dans notre exemple).
	- le premier élément est la valeur actuelle
	- le deuxième est une fonction qui permet de la modifier
	- paramètre passé entre parenthèses à useState (0) est l'état initial de notre state
	*/
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)
	const [isOpen, setIsOpen] = useState(true)

	const total = cart.reduce(
		(acc, plant) => acc + plant.amount * plant.price, NUMBER.ZERO
	)

	function handleRemoveFromCart(name) {
		dispatch(removeFromCart(name))
	}

	function handleEmptyCart() {
		dispatch(emptyCart())
	}

	useEffect(() => {
		document.title = `LMJ: ${total}${TEXT.CART.EURO} d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				{TEXT.CART.CLOSE}
			</button>
			{cart.length > NUMBER.ZERO ? (
				<div>
					<h2>{TEXT.CART.CART}</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}{TEXT.CART.EURO} x {amount}
								<button onClick={() => handleRemoveFromCart(name)}>{TEXT.CART.REMOVE}</button>
							</div>
						))}
					</ul>
					<h3>{TEXT.CART.TOTAL} :{total}{TEXT.CART.EURO}</h3>
						<button onClick={() => handleEmptyCart()}>{TEXT.CART.EMPTY}</button>
				</div>
			) : (
				<div>{TEXT.CART.EMPTY_CART}</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}>
					{TEXT.CART.OPEN}
			</button>
		</div>
		
	)
}

export default Cart