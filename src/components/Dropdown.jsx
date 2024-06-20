import { useState } from "react"
import '../styles/Dropdown.css'


export default function Dropdown(props){
    const [isOpened, setIsOpened] = useState(false)/*This line initializes a state variable (isOpened) and a function setIsOpened to update the state.
    The initial value of isOpened is set to false using the useState hook*/

    function toggleIsOpened(){
        setIsOpened(prevValue => !prevValue)
    }/*defines a function called toggleIsOpened which toggles the value of isOpened by using 
    the setIsOpened function and passing in the opposite value of the previous state. */

    const elements = props.elements.map(el => {
        return ( 
        <div className="element" key={el.id}>
            <p className="element-name">{el.name}</p>
        </div>)
    })

    return (
        <div className="dropdown-container">
            <div className="dropdown-title" onClick={toggleIsOpened}>
                <p>{props.title}</p>
                <picture>
                    <source srcSet="/images/icon-arrow-dark.svg" media="(max-width: 950px)" />
                    <img 
                        src={`/images/icon-arrow-light.svg`} //src={`/images/icon-arrow-${isOpened ? "light" : "dark"}.svg`} 
                        className={`dropdown-icon ${isOpened ? "opened" : ""}`} 
                        alt='Arrow icon'
                    >
                    </img>
                </picture>
            </div>
            {isOpened && <div className={`dropdown-content ${props.title.toLowerCase()}`}>
                {elements}
            </div>}
        </div>
    )
}