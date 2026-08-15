const businessData= [{
    image:'/assets/business.png',
    name:'Business',
    address:'123 Main St',
    city:'Anytown',
    state:'CA',
    zipCode:'12345',
    category:'Italian',
    rating:4.5,
    reviewCount: 1234
}];

function Business() {
    return (
        <div className="Business">
            <div className="image-container">
                <img src={businessData.image} alt={businessData.name} />
            </div>
            <h2>{businessData.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{businessData.address}</p>
                    <p>{businessData.city}</p>
                    <p>{`${businessData.state} ${businessData.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{businessData.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${businessData.rating} stars`}</h3>
                    <p>{`${businessData.reviewCount} reviews`}</p>
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