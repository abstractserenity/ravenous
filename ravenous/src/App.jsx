// Inside App.jsx
import { useState } from 'react';
import SearchBar from "./components/search-bar-component.jsx";
import { BusinessList } from "./components/business-components.jsx";
import { fetchBusinessData } from "./utils/yelp-api.js";
import './App.css';

function App() {
    // Start with an empty list instead of your mock businessData array
    const [businesses, setBusinesses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // 2. Add 'async' here since making network requests takes time
    const searchYelp = async (term, location, sortBy) => {
        // Guard clause: Don't execute if the user hasn't typed a location yet (Yelp requires this)
        if (!location) {
            alert("Please enter a location to search!");
            return;
        }

        setIsLoading(true);

        // 3. Call your API function and wait for the results
        const results = await fetchBusinessData({ term, location, sortBy });

        // 4. Update your state with the live data returned from Yelp
        setBusinesses(results);
        setIsLoading(false);
    };

    return (
        <div className="font-nunito">
            <div className="p-2.5 bg-btn-brown">
                <h1 className="text-4xl font-bold text-center bg-btn-brown text-white">ravenous</h1>
            </div>

            <SearchBar searchYelp={searchYelp} />

            {/* 5. Show a friendly message while loading, otherwise display the list */}
            {isLoading ? (
                <div className="text-center mt-12 text-xl font-semibold text-gray-600">
                    Searching Yelp for businesses...
                </div>
            ) : (
                <BusinessList businesses={businesses} />
            )}
        </div>
    );
}

export default App;
