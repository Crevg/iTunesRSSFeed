import './Card.css'

const Card = (props) => {
    return (
        <div className="card" >
            <img src={props.img} className="card-img-top" alt="poster"></img>
            <div className="card-body">
                <h5 className="card-title"> {props.title}</h5>
                <span className="card-text"> {props.children} </span>
                <button onClick={props.actionFunction} className="btn btn-secondary"> {props.actionLabel} </button>
            </div>
        </div>
    )
}

export default Card