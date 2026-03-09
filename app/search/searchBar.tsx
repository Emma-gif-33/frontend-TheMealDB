'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('name');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        router.push(`/search?type=${type}&q=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mt-8">
            <div className="flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white border-2 border-orange-100 p-2">

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="bg-orange-50 text-orange-700 font-bold px-6 py-3 outline-none rounded-2xl md:rounded-l-2xl md:rounded-r-none cursor-pointer hover:bg-orange-100 transition-colors"
                >
                    <option value="name">Nombre</option>
                    <option value="ing">Ingrediente</option>
                    <option value="area">Región</option>
                    <option value="letter">Letra</option>
                </select>

                <input
                    type="text"
                    placeholder={`Buscar postre por ${type}...`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-grow px-6 py-3 text-gray-700 outline-none text-lg placeholder:text-gray-300"
                />

                <button
                    type="submit"
                    className="bg-orange-600 text-white px-10 py-3 font-black text-lg hover:bg-orange-700 transition-all active:scale-95 rounded-2xl md:rounded-r-2xl md:rounded-l-none"
                >
                    BUSCAR RECETA
                </button>
            </div>
        </form>
    );
}