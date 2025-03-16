import { createContext, useContext, useState } from 'react';

interface SearchContextType {
    search: string;
    setSearch: (value: string) => void;
}

// Tạo context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Tạo provider để bọc các component
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

// Hook để sử dụng context
export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
