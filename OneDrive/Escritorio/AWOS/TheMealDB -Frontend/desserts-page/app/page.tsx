import { MealService } from '@/src/services/api';
import RecipeCard from '@/src/components/mainPage/recipeCard';
import { ApiResponse, RecipeSummary } from '@/src/models/models';
import SearchBar from "@/app/search/searchBar";

export default async function HomePage() {
  const response: ApiResponse<RecipeSummary[]> = await MealService.getAll();
  const recipes = response.data;

  return (
      <main className="min-h-screen bg-gray-50 pb-12">
        <section className="bg-orange-50 py-16 px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Encuentra tu próximo <span className="text-orange-600">postre favorito</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora cientos de recetas deliciosas traídas directamente desde nuestra API de repostería.
          </p>
            <SearchBar />
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
  );
}