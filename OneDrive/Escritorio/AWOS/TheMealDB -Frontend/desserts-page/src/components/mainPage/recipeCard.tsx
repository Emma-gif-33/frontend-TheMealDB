import { RecipeSummary} from '@/src/models/models';
import Link from 'next/link';

interface Props {
    recipe: RecipeSummary;
}

export default function RecipeCard({ recipe }: Props) {
    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">

            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1">
                    {recipe.name}
                </h3>
                <Link
                    href={`/recipes/${recipe.id}`}
                    className="inline-block w-full text-center py-2 px-4 bg-gray-50 text-orange-600 font-semibold rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors"
                >
                    Ver Receta
                </Link>
            </div>
        </div>
    );
}