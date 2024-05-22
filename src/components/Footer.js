import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function getEmail(value) {
        setInputValue(value)
    }

    function checkEmail(value) {
        if(!value.includes('@')) {
            alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide`)
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné-e-s de plantes 🌿🌱🌵
            </div>
            <div  className='lmj-footer-elem'>Laissez-nous votre email :
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