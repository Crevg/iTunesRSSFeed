import {Fragment} from "react"
import { Link } from "react-router-dom"
const NotFound = () => {
    return <Fragment> 
        <h1> What you are looking for was not found :C </h1>
        <Link to="/home"> <button className="btn btn-primary"> Home</button> </Link>
        </Fragment> 
}


export default NotFound