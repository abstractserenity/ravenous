function SearchBar() {
    return (
        <div id="SearchBar">
            <ul id="search-bar-tabs">
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Reviewed</li>
            </ul>
            <input className="rounded-sm border-2 border-slate-200" id="search-bar-user-terms" type="text" placeholder="Search Businesses" />
            <input className="rounded-sm border-2 border-slate-200" id="search-bar-city" type="text" placeholder="Where?" />
            <input className="rounded-sm text-white bg-yellow-500 font-bold" type="submit" value="Let's Go" />
        </div>
    )
};

export default SearchBar;