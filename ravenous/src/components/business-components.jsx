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
    );
}


function BusinessList({ businesses = [] }) {
    // Graceful presentation handling when no search data exists yet
    if (businesses.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-12 text-lg">
                No businesses found. Try searching with a term and location above!
            </p>
        );
    }

    return (
        <div className="BusinessList flex flex-wrap justify-center gap-20 mt-8">
            {businesses.map((business) => (
                <Business key={business.id} business={business}/>
            ))}
        </div>
    );
}

export { BusinessList };
export default Business;
