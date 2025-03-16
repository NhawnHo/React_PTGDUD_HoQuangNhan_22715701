import React from 'react';
import { useSearch } from './SearchContext';

function Search() {
    const { search, setSearch } = useSearch(); // Lấy giá trị từ context
    function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value); // Cập nhật state của SearchProvider
    }

  return (
    < >
      <input
            value={search} // Hiển thị giá trị từ context
            onChange={handleChanges}
            className="rounded-xl p-2 bg-gray-200 w-[330px] text-sm mt-3"
            type="text"
            placeholder="What would you like to cook?"
      />
    </>
        
    );
}

export default Search;
