import businessImage from '../assets/business.png';

const businessData= [{
    image: businessImage,
    name:'Phoenix Restaurant',
    address:'123 Main St',
    city:'Anytown',
    state:'CA',
    zipCode:'12345',
    category:'Italian',
    rating:4.5,
    reviewCount: 1234
}, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHEiEdJzn8nyHEDpv8gJnwavY3rmUd8elFgjqIB7m7CYpt7fCzzgufMxP&s=10',
    name: 'Stark Solutions',
    address: '456 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    category: 'Chinese',
    rating: 3.5,
    reviewCount: 125
}, {
    image: 'https://as2.ftcdn.net/jpg/01/92/92/85/1000_F_192928521_C4Ff5bceflGQIIVaoxUneAENrYE9EMCG.jpg',
    name: 'Ethopia Utopia',
    address: '3 North Haven Rd',
    city: 'New Bass',
    state: 'NY',
    zipCode: '14925',
    category: 'Ethiopian',
    rating: 4.1,
    reviewCount: 456
}];

function Business({ business }) {
    return (
        <div className="Business w-64">
            <img
                className="w-full h-48 object-cover rounded-sm border-amber-300 border-2"
                src={business.image}
                alt={business.name}
            />
            <h2 className="mt-3 font-bold text-lg">{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address text-sm text-gray-600">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                    <h3 className="text-amber-500 font-semibold">{business.category.toUpperCase()}</h3>
                    <h3 className="rating text-amber-500 font-semibold">{`${business.rating} stars`}</h3>
                    <p className="text-sm text-gray-600">{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    )
};

function BusinessList() {
    return (
        <div className="BusinessList flex flex-wrap gap-6 ml-88 mr-80">
            {businessData.map((business, index) => (
                <Business key={index} business={business}/>
            ))}
        </div>
    )
}

export { BusinessList }
export default Business;