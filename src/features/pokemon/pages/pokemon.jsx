import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonCard } from "../components/PokemonCard";

const LIMIT = 20;

export function PokemonPage() {
    const [page, setPage] = useState(0);
    const { pokemons, total, loading, error } = usePokemon(LIMIT, page * LIMIT);

    const totalPages = Math.ceil(total / LIMIT);

    if (error) return <div className="p-10 text-red-500">{error}</div>;

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Pokédex</h1>

            {loading ? (
                <div className="text-gray-500">Cargando pokémons...</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}

            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={() => setPage((p) => p - 1)}
                    disabled={page === 0 || loading}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition-colors"
                >
                    ← Anterior
                </button>
                <span className="text-gray-600 font-medium">
                    Página {page + 1} de {totalPages}
                </span>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page >= totalPages - 1 || loading}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition-colors"
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );
}
