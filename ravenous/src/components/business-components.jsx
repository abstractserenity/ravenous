import businessImage from '../assets/business.png';

const businessData= [{
    image: businessImage,
    name:'Business',
    address:'123 Main St',
    city:'Anytown',
    state:'CA',
    zipCode:'12345',
    category:'Italian',
    rating:4.5,
    reviewCount: 1234
}];

function Business({ business }) {
    return (
        <div className="Business">
            <div className="image-container">
                <img src={business.image} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    )
};

function BusinessList() {
    return (
        <div className="BusinessList">
            {businessData.map((business, index) => (
                <Business key={index} business={business}/>
            ))}
        </div>
    )
}

export { BusinessList }
export default Business;