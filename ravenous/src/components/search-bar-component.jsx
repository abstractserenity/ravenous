import ravenous from '../assets/ravenous.jpg';

function SearchBar() {
    return (
        <div style={{ backgroundImage: `url(${ravenous})` }} className="bg-cover p-20" id="SearchBar">
            <ul className="grid grid-cols-3 gap-1 ml-80 mr-80 mt-5 mb-5" id="search-bar-tabs">
                <li className="text-white text-center hover:text-gray-200 cursor-pointer">Best Match</li>
                <li className="text-white text-center hover:text-gray-200 cursor-pointer">Highest Rated</li>
                <li className="text-white text-center hover:text-gray-200 cursor-pointer">Most Reviewed</li>
            </ul>
            <hr className="bg-white border-white ml-80 mr-80" />
            <div className="flex justify-center gap-4" id="search-bar-inputs">
                <input className="bg-white pl-3 rounded-sm border-2 border-slate-200 text-gray-400 mr-3 text-sm mt-10 h-10 w-100"
                       id="search-bar-user-terms" type="text" placeholder="Search Businesses" />
                <input className="bg-white pl-3 rounded-sm border-2 border-slate-200 text-gray-400 ml-3 text-sm mt-10 h-10 w-100"
                       id="search-bar-city" type="text" placeholder="Where?" />
            </div>
            <div className="flex justify-center gap-4 mt-10">
                <input className="text-sm rounded-sm text-white bg-btn-brown font-bold
                hover:bg-btn-brown-dark h-10 w-28 cursor-pointer"
                       type="submit" value="Let's Go" />
            </div>
        </div>
    )
}

export default SearchBar;