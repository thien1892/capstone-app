import './Highlight.css';
import Card from './Card';

const specialFood = [
    {
        title: "Greek salad",
        description: 'The famous greek salad of crispy lettuce, \
        peppers, olives and our Chicago style feta cheese, \
        garnished with crunchy garlic and rosemary croutons. ',
        price:'12.99',
        url: require("../icons_assets/greek salad.jpg"),
    },
    {
        title: "Bruchetta",
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        price:'5.99',
        url: require("../icons_assets/restaurant chef B.jpg"),

    },
    {
        title: "Lemon Dessert",
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price:'5.00',
        url: require("../icons_assets/lemon dessert.jpg"),
    },
];


const mapSpecialFood = specialFood.map(
    item => {
        return(
            <div className='highLight-item'>
                <Card 
                title= {item.title}
                description = {item.description}
                price = {item.price}
                urlImage = {item.url}
                />
            </div>
        )
    }
);

function Highlight() {
    return(
        <div className='highLight-component'>
            <h2>This weeks specials</h2>
            <div className='highLight'>
                {mapSpecialFood}
            </div>
        </div>
    )
}

export default Highlight;