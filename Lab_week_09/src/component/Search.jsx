import React from 'react';

function Search() {
    return (
        <>
            <input
                className="rounded-xl p-2 bg-gray-200 w-[330px] text-sm mt-3 
               focus:outline-none focus:ring-2 focus:ring-pink-300 
               hover:ring-2 hover:ring-pink-400 transition duration-200"
                type="text"
                placeholder="What would you like to cook?"
            />
        </>
    );
}

export default Search;
