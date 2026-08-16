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
                className="w-full h-48 object-cover rounded-sm"
                src={business.image}
                alt={business.name}
            />
            <h2 className="mt-3 font-bold text-lg">{business.name}</h2>
            <div className="Business-information grid grid-cols-2 items-baseline gap-x-4 mt-2">
                <p className="text-sm text-gray-600">{business.address}</p>
                <h3 className="text-amber-500 font-semibold text-right">{business.category.toUpperCase()}</h3>

                <p className="text-sm text-gray-600">{business.city}</p>
                <h3 className="rating text-amber-500 font-semibold text-right">{`${business.rating} stars`}</h3>

                <p className="text-sm text-gray-600">{`${business.state} ${business.zipCode}`}</p>
                <p className="text-sm text-gray-600 text-right">{`${business.reviewCount} reviews`}</p>
            </div>
        </div>
    )
}

function BusinessList() {
    return (
        <div className="BusinessList flex flex-wrap justify-center gap-20 mt-8">
            {businessData.map((business, index) => (
                <Business key={index} business={business}/>
            ))}
        </div>
    )
}

export { BusinessList }
export default Business;