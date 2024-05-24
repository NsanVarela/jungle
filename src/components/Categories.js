import '../styles/Categories.css'
import { TEXT } from '../constants/text'

function Categories({ setActiveCategories, categories, activeCategories }) {
	
	function handleCheckboxChange(category) {
        if (activeCategories.includes(category)) {
            setActiveCategories(activeCategories.filter((cat) => cat !== category))
        } else {
            setActiveCategories([...activeCategories, category])
        }
    }

	return (
		<div className='lmj-categories'>
			<p>Catégories de plantes</p>
			<ul>
                    {categories.map((cat) => (
                        <li key={cat}>
                            <label>
                                <input
                                    type='checkbox'
                                    value={cat}
                                    checked={activeCategories.includes(cat)}
                                    onChange={() => handleCheckboxChange(cat)}
                                />
                                {cat}
                            </label>
                        </li>
                    ))}
                </ul>
			<button onClick={() => setActiveCategories([])}>{TEXT.CART.REINITIALIZE}</button>
		</div>
	)
}

export default Categories