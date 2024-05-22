import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    /* Props injectées par déstructuration. 
    Cela permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet. 
    Cela nous permet de déclarer directement nos deux variables  scaleValue   et  careType, 
    et de les assigner aux valeurs passées en props.
    */
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' 
        ? ( <img src={Sun} alt='sun-icon' /> ) 
        : ( <img src={Water} alt='water-icon' /> )

    return (
        /* Pour chaque rangeElem (qui sera 1, 2, et 3), le composant vérifie si scaleValue est supérieur
         ou égal à rangeElem.
        - Si scaleValue est supérieur ou égal à rangeElem, un élément <span> contenant l'icône ☀️ est rendu.
        - Sinon, null est retourné, ce qui signifie qu'aucun élément ne sera rendu pour cette itération.

        Chaque <span> a une key unique basée sur rangeElem.toString(), ce qui est nécessaire pour que React 
        suive efficacement les éléments dans une liste.
        */
        <div>
            { range.map((rangeElem) => 
                scaleValue >= rangeElem 
                    ? <span key={rangeElem.toString()}>{scaleType}</span> 
                    : null
            )}
        </div>
    )
}

export default CareScale