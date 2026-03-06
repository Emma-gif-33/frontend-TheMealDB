import { MealService } from '@/src/services/api';
import RecipeCard from '@/src/components/mainPage/recipeCard';
import Link from "next/link";

export default async function SearchPage({ searchParams }: any) {
    const params = await searchParams;
    const type = params.type || 'name';
    const q = params.q || '';

    try {
        const response = await MealService.search(type, q);
        const recipes = response.data || [];

        return (
            <div className="max-w-7xl mx-auto p-10 min-h-screen bg-white">
                <h1 className="text-3xl font-black mb-8">
                    Resultados para <span className="text-orange-600">"{q}"</span>
                </h1>
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <Link href="/" className="text-orange-600 font-bold hover:underline">
                        Volver al inicio
                    </Link>
                </div>

                {recipes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recipes.map((recipe: any) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
                        <p className="text-xl text-gray-400">No encontramos nada. Intenta con otra palabra. 🍪</p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        return <div className="p-20 text-center text-red-500">Error al conectar con el Backend.</div>;
    }
}