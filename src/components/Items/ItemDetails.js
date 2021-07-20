import { useHistory } from "react-router-dom"
import Card from "../UI/Card"
import NotFound from "../UI/NotFound"

import './ItemDetails.css'
const ItemDetails = props => {
    const history = useHistory()
    const goBackHandler =  () => {
        history.push('/home')
    }
    return (
        <div className='card__container'>
            {props.name ? <Card title={props.name} img={props.artworkUrl100} actionLabel="Go Back" actionFunction={goBackHandler} >
            <ul>
                <li key="1"> {props.artistName} </li>
                <li key="2"> {props.kind} </li>
                <li key="3"> {props.releaseDate} </li>
            </ul>
            </Card> : <NotFound></NotFound>}

        </div>
        
        
    )
}
export default ItemDetails