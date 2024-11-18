import React, { useState } from 'react';
import searchIcon from "../assets/images/search.png"

function Search({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city.trim() !== "") {
            onSearch(city);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Enter city name"
                spellCheck="false"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    );
}

export default Search;