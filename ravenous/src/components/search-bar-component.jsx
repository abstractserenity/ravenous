function SearchBar() {
    return (
        <div id="SearchBar">
            <ul className="grid grid-cols-3 ap-1 ml-80 mr-80 mt-5 mb-5" id="search-bar-tabs">
                <li className="text-center">Best Match</li>
                <li className="text-center">Highest Rated</li>
                <li className="text-center">Most Reviewed</li>
            </ul>
            <div className="grid grid-cols-3 gap-4 ml-135 mr-80" id="search-bar-inputs">
                <input className="rounded-sm border-2 border-slate-200 justify-center items-center"
                       id="search-bar-user-terms" type="text" placeholder="Search Businesses" />
                <input className="rounded-sm border-2 border-slate-200 justify-center items-center"
                       id="search-bar-city" type="text" placeholder="Where?" />
            </div>
            <div className="grid grid-cols-1 ml-150 mr-150 mt-5 mb-5">
                <input className="rounded-sm text-white bg-yellow-500 font-bold justify-center items-center"
                       type="submit" value="Let's Go" />
            </div>
        </div>
    )
};

export default SearchBar;