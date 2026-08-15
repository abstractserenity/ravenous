import ravenous from '../assets/ravenous.jpg';

function SearchBar() {
    return (
        <div style={{ backgroundImage: `url(${ravenous})` }} className="bg-cover p-20" id="SearchBar">
            <ul className="grid grid-cols-3 ap-1 ml-80 mr-80 mt-5 mb-5" id="search-bar-tabs">
                <li className="text-white text-center hover:text-gray-200 cursor-pointer">Best Match</li>
                <li className="text-white text-center hover:text-gray-200 cursor-pointer">Highest Rated</li>
                <li className="text-white text-center hover:text-gray-200 cursor-pointer">Most Reviewed</li>
            </ul>
            <hr className="bg-white border-white ml-80 mr-80" />
            <div className="grid grid-cols-3 gap-4 ml-126 mr-80 mt-6" id="search-bar-inputs">
                <input className="bg-white rounded-sm border-2 border-slate-200 text-gray-400"
                       id="search-bar-user-terms" type="text" placeholder="Search Businesses" />
                <input className="bg-white rounded-sm border-2 border-slate-200 text-gray-400"
                       id="search-bar-city" type="text" placeholder="Where?" />
            </div>
            <div className="grid grid-cols-1 ml-150 mr-150 mt-5 mb-5">
                <input className="rounded-sm text-white bg-yellow-500 font-bold hover:bg-yellow-600"
                       type="submit" value="Let's Go" />
            </div>
        </div>
    )
};

export default SearchBar;