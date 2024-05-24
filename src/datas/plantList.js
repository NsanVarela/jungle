import monstera from '../assets/monstera.jpg'
import ficus from '../assets/ficus.jpg'
import pothos from '../assets/pothos.jpg'
import yucca from '../assets/yucca.jpg'
import olivier from '../assets/olivier.jpg'
import geranium from '../assets/geranium.jpg'
import basilique from '../assets/basilique.jpg'
import aloe from '../assets/aloe.jpg'
import succulente from '../assets/succulente.jpg'
import { TEXT } from '../constants/text'
import { NUMBER } from '../constants/number'

export const plantList = [
	{
		name: TEXT.PLANT.NAME.MONSTERA,
		category: TEXT.PLANT.CATEGORY.CLASSIC,
        id: '1ed',
        isBestSale: false,
        isSpecialOffer: true,
		light: NUMBER.TWO,
		water: NUMBER.THREE,
		cover: monstera,
		price: NUMBER.FIFTEEN
	},
	{
		name: TEXT.PLANT.NAME.FICUS_LYRATA,
		category: TEXT.PLANT.CATEGORY.CLASSIC,
		id: '2ab',
        isBestSale: false,
        isSpecialOffer: true,
		light: NUMBER.THREE,
		water: NUMBER.ONE,
		cover: ficus,
		price: NUMBER.SIXTEEN
	},
	{
		name: TEXT.PLANT.NAME.POTHOS_ARGENTE,
		category: TEXT.PLANT.CATEGORY.CLASSIC,
		id: '3sd',
        isBestSale: false,
        isSpecialOffer: true,
		light: NUMBER.ONE,
		water: NUMBER.TWO,
		cover: pothos,
		price: NUMBER.SIXTEEN
	},
	{
		name: TEXT.PLANT.NAME.YUCCA,
		category: TEXT.PLANT.CATEGORY.CLASSIC,
		id: '4kk',
        isBestSale: true,
        isSpecialOffer: false,
		light: NUMBER.THREE,
		water: NUMBER.ONE,
		cover: yucca,
		price: NUMBER.FIFTEEN
	},
	{
		name: TEXT.PLANT.NAME.OLIVIER,
		category: TEXT.PLANT.CATEGORY.OUTSIDE,
		id: '5pl',
        isBestSale: false,
        isSpecialOffer: false,
		light: NUMBER.THREE,
		water: NUMBER.ONE,
		cover: olivier,
		price: NUMBER.FIFTEEN
	},
	{
		name: TEXT.PLANT.NAME.GERANIUM,
		category: TEXT.PLANT.CATEGORY.OUTSIDE,
		id: '6uo',
        isBestSale: false,
        isSpecialOffer: false,
		light: NUMBER.TWO,
		water: NUMBER.TWO,
		cover: geranium,
		price: NUMBER.FIFTEEN
	},
	{
		name: TEXT.PLANT.NAME.BASILIQUE,
		category: TEXT.PLANT.CATEGORY.OUTSIDE,
		id: '7ie',
        isBestSale: true,
        isSpecialOffer: false,
		light: NUMBER.TWO,
		water: NUMBER.THREE,
		cover: basilique,
		price: NUMBER.FIFTEEN
	},
	{
		name: TEXT.PLANT.NAME.ALOE,
		category: TEXT.PLANT.CATEGORY.FAT,
		id: '8fp',
        isBestSale: false,
        isSpecialOffer: false,
		light: NUMBER.TWO,
		water: NUMBER.ONE,
		cover: aloe,
		price: NUMBER.FIFTEEN
	},
	{
		name: TEXT.PLANT.NAME.SUCCULENTE,
		category: TEXT.PLANT.CATEGORY.FAT,
		id: '9vn',
        isBestSale: true,
        isSpecialOffer: true,
		light: NUMBER.TWO,
		water: NUMBER.ONE,
		cover: succulente,
		price: NUMBER.FIFTEEN
	}
]