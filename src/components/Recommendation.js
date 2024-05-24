import { TEXT } from '../constants/text'
import { NUMBER } from '../constants/number'

function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= NUMBER.TWO && currentMonth <= NUMBER.FIVE
    
    if (!isSpring) {
    return <div>{TEXT.plant.care.NE_PAS_REMPOTER}</div>
    }
return <div>{TEXT.plant.care.REMPOTER}</div>
}

export default Recommendation