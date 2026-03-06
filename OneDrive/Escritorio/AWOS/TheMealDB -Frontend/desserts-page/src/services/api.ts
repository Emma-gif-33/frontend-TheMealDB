const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("URL:", BASE_URL)
export const MealService = {
    getAll: async () => {
        const res = await fetch(`${BASE_URL}/meals`);
        if (!res.ok) throw new Error('Error al obtener recetas');
        return res.json();
    },

    getById: async (id: string) => {
        const res = await fetch(`${BASE_URL}/meals/${id}`);
        if (!res.ok) throw new Error('Error al obtener detalles de la receta');
        return res.json();
    },

    getRandom: async () => {
        const res = await fetch(`${BASE_URL}/meals/random`);
        if (!res.ok) throw new Error('Error al obtener una receta aleatoria');
        return res.json();
    },

    search: async (type: string, query: string) => {
        const res = await fetch(`${BASE_URL}/search?type=${type}&q=${query}`);
        if (!res.ok) throw new Error('Error en la búsqueda de una receta');
        return res.json();
    }
};