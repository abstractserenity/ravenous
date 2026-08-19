import ravenous from '../assets/ravenous.jpg';
import { useState } from "react";

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

function SearchBar({ searchYelp }) {
    const [searchInput, setSearchInput] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('best_match');

    const handleSearchTermChange = (e) => setSearchInput(e.target.value);
    const handleSearchLocationChange = (e) => setSearchLocation(e.target.value);

    const handleSortByChange = (sortByOption) => {
        setSortingOption(sortByOption);
        // Re-run search automatically on tab switch
        if (searchYelp) {
            searchYelp(searchInput, searchLocation, sortByOption);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchYelp) {
            searchYelp(searchInput, searchLocation, sortingOption);
        }
    };

    const getSortByClass = (optionValue) => {
        return sortingOption === optionValue
            ? "text-white font-bold underline text-center cursor-pointer"
            : "text-white text-center hover:text-gray-200 cursor-pointer";
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((optionLabel) => {
            const optionValue = sortByOptions[optionLabel];
            return (
                <li
                    key={optionValue}
                    className={getSortByClass(optionValue)}
                    onClick={() => handleSortByChange(optionValue)}
                >
                    {optionLabel}
                </li>
            );
        });
    };

    return (
        <div style={{ backgroundImage: `url(${ravenous})` }} className="bg-cover p-20" id="SearchBar">
            <ul className="grid grid-cols-3 gap-1 ml-80 mr-80 mt-5 mb-5" id="search-bar-tabs">
                {renderSortByOptions()}
            </ul>
            <hr className="bg-white border-white ml-80 mr-80" />

            <form onSubmit={handleSearch}>
                <div className="flex justify-center gap-4" id="search-bar-inputs">
                    <input
                        className="bg-white pl-3 rounded-sm border-2 border-slate-200 text-gray-400 mr-3 text-sm mt-10 h-10 w-100"
                        type="text"
                        placeholder="Search Businesses"
                        value={searchInput}
                        onChange={handleSearchTermChange}
                    />
                    <input
                        className="bg-white pl-3 rounded-sm border-2 border-slate-200 text-gray-400 ml-3 text-sm mt-10 h-10 w-100"
                        type="text"
                        placeholder="Where?"
                        value={searchLocation}
                        onChange={handleSearchLocationChange}
                    />
                </div>
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        type="submit"
                        className="text-sm rounded-sm text-white bg-btn-brown font-bold hover:bg-btn-brown-dark h-10 w-28 cursor-pointer"
                    >
                        Let's Go
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;