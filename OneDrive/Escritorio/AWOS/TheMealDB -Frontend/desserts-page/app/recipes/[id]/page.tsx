import { MealService } from '@/src/services/api';
import { RecipeDetail } from '@/src/models/models';
import Link from 'next/link';

export default async function RecipeDetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const response = await MealService.getById(id);
    const recipe: RecipeDetail = response.data;

    if (!recipe) {
        return <div className="text-center py-20 text-2xl">Receta no encontrada </div>;
    }

    return (
        <main className="min-h-screen bg-white pb-20">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <Link href="/" className="text-orange-600 font-bold hover:underline">
                    Volver al inicio
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-fit">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
        {recipe.category} | {recipe.region}
        </span>
                    <h1 className="text-4xl font-black text-gray-900 mt-4 mb-8">
                        {recipe.name}
                    </h1>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Ingredientes</h2>
                        <ul className="space-y-3">
                            {recipe.ingredients.map((ing, index) => (
                                <li key={index} className="flex justify-between text-gray-700">
                                    <span className="font-medium">{ing.name}</span>
                                    <span className="text-orange-600 italic">{ing.measure}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Instrucciones</h2>
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line bg-orange-50/30 p-8 rounded-3xl border border-orange-100">
                    {recipe.instructions}
                </p>
            </div>
        </main>
    );
}