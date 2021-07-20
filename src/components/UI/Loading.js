import { Fragment } from "react"

const Loading = (props) => {

    return (
        <Fragment>
            
            <h2> {props.children}</h2>
            <div className="spinner-border" role="status">
            </div>
        </Fragment>


    )
}

export default Loading