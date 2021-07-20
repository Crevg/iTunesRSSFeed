import styles  from "./Header.module.css"
import { useHistory } from "react-router"

const Header = (props) => {
    const history = useHistory()
    const goHome = () => {
        history.push("/home")
    }
    return (
    <div className={styles.header__container}> 
        <strong onClick={goHome} className={styles.navHeader}> {props.children} </strong> 
       
    </div>)
}

export default Header