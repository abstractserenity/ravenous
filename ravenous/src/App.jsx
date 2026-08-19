import React, { useState } from 'react';
import SearchBar from "./components/search-bar-component.jsx";
import { BusinessList, businessData } from "./components/business-components.jsx";
import './App.css';

function App() {
    const [businesses, setBusinesses] = useState(businessData);

    const searchYelp = (term, location, sortBy) => {
        // Filter by term & location
        const filtered = businessData.filter((b) => {
            const matchTerm = !term ||
                b.name.toLowerCase().includes(term.toLowerCase()) ||
                b.category.toLowerCase().includes(term.toLowerCase());

            const matchLocation = !location ||
                b.city.toLowerCase().includes(location.toLowerCase()) ||
                b.state.toLowerCase().includes(location.toLowerCase());

            return matchTerm && matchLocation;
        });

        // Sort by selected tab
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'review_count') return b.reviewCount - a.reviewCount;
            return 0; // Default: best_match
        });

        setBusinesses(sorted);
    };

    return (
        <div className="font-nunito">
            <div className="p-2.5 bg-btn-brown">
                <h1 className="text-4xl font-bold text-center bg-btn-brown text-white">ravenous</h1>
            </div>
            <SearchBar searchYelp={searchYelp} />
            <BusinessList businesses={businesses} />
        </div>
    );
}

export default App;