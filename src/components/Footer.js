import { useState } from 'react'
import '../styles/Footer.css'
import { TEXT } from '../constants/text'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    // useEffect(() => {
    //     console.log(`1 - Cette alerte s'affiche à chaque rendu`)
    // })

    // useEffect(() => {
    //     console.log(`2 - Cette alerte s'affiche au premier rendu`)
    // }, [])

    // useEffect(() => {
    //     console.log(`3 - Cette alerte s'affiche la première fois et quand mon panier est mis à jour`)
    // }, [cart])

    // useEffect(() => {
    //     return () => 
    //     console.log(`4 - Cette alerte s'affiche quand Footer est retiré du DOM`)
    // }, [cart])

    function getEmail(value) {
        setInputValue(value)
    }

    function checkEmail(value) {
        if(!value.includes(TEXT.ARROBASE)) {
            alert(TEXT.ERREUR_EMAIL)
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                {TEXT.ACCROCHE_FOOTER}
            </div>
            <div  className='lmj-footer-elem'>{TEXT.DEMANDE_EMAIL}
                <form>
                    <input 
                        type='text' 
                        name='email' 
                        value={inputValue}
                        onChange={(e) => getEmail(e.target.value)}
                        onBlur={(e) => checkEmail(e.target.value)}
                    />
                </form>
            </div>
        </footer>
    )
}

export default Footer