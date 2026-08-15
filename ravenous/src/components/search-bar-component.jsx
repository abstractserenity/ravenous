import './index.css'

function SearchBar() {
    return (
        <div className="SearchBar">
            <ul className="search-bar-tabs">
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Reviewed</li>
            </ul>
            <input className="search-bar-user-terms" type="text" placeholder="Search Businesses" />
            <input className="search-bar-city" type="text" placeholder="Where?" />
            <input class="rounded-sm text-white " type="submit" value="Let's Go" />
        </div>
    )
};

export default SearchBar;