import './Card.css';

function Card(props) {
    return(
        <div className='card-component'>
            <div className='card-component-item'>
                <img src={props.urlImage} alt='image of food'/>
            </div>
            <div className='card-component-item'>
                <p>{props.title}</p>
                <span>${props.price}</span>
            </div>
            <div className='card-component-item'>
                <p>{props.description}</p>
            </div>
            <div className='card-component-item'>
                <p>Order a delivery</p>
            </div>
        </div>
    )
};

export default Card;