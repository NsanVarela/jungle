import '../styles/PlantItem.css'
import CareScale from './CareScale'
import { TEXT } from '../constants/text'

function PlantItem({ id, cover, name, water, light }) {
	
    return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale 
					careType={TEXT.PLANT.CARE.WATER}
					scaleValue={water} 
				/>
				<CareScale 
					careType={TEXT.PLANT.CARE.LIGHT} 
					scaleValue={light} 
				/>
			</div>
		</li>
    )
}

export default PlantItem