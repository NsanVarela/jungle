import { useDispatch } from 'react-redux'
import { useState } from 'react'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { plantList } from '../datas/plantList'
import { addToCart } from '../redux/actions'
import { TEXT } from '../constants/text'

function ShoppingList() {
	const dispatch = useDispatch()
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function handleAddToCart(name, price) {
		dispatch(addToCart(name, price))
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => handleAddToCart(name, price)}>{TEXT.AJOUTER}</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList