import { usePokemon } from "../hooks/usePokemon";
import { PokemonCard } from "../components/PokemonCard";

export function PokemonPage() {
    const { pokemons, loading, error } = usePokemon(20);

    if (loading) return <div className="p-10 text-gray-500">Cargando pokémons...</div>;
    if (error) return <div className="p-10 text-red-500">{error}</div>;

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Pokédex</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
