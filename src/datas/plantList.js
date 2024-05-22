import monstera from '../assets/monstera.jpg'
import ficus from '../assets/ficus.jpg'
import pothos from '../assets/pothos.jpg'
import yucca from '../assets/yucca.jpg'
import olivier from '../assets/olivier.jpg'
import geranium from '../assets/geranium.jpg'
import basilique from '../assets/basilique.jpg'
import aloe from '../assets/aloe.jpg'
import succulente from '../assets/succulente.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
        id: '1ed',
        isBestSale: false,
        isSpecialOffer: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: false,
        isSpecialOffer: true,
		light: 3,
		water: 1,
		cover: ficus,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
        isSpecialOffer: true,
		light: 1,
		water: 2,
		cover: pothos,
		price: 16
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: true,
        isSpecialOffer: false,
		light: 3,
		water: 1,
		cover: yucca,
		price: 15
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: false,
        isSpecialOffer: false,
		light: 3,
		water: 1,
		cover: olivier,
		price: 15
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isBestSale: false,
        isSpecialOffer: false,
		light: 2,
		water: 2,
		cover: geranium,
		price: 15
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: true,
        isSpecialOffer: false,
		light: 2,
		water: 3,
		cover: basilique,
		price: 15
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: false,
        isSpecialOffer: false,
		light: 2,
		water: 1,
		cover: aloe,
		price: 15
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: true,
        isSpecialOffer: true,
		light: 2,
		water: 1,
		cover: succulente,
		price: 15
	}
]