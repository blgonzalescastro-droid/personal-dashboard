export function PokemonCard({ pokemon }) {
    const sprite = pokemon.sprites.other["official-artwork"].front_default;
    const types = pokemon.types.map((t) => t.type.name);

    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <img src={sprite} alt={pokemon.name} className="w-24 h-24 object-contain" />
            <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
            <div className="flex gap-1">
                {types.map((type) => (
                    <span
                        key={type}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 capitalize"
                    >
                        {type}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-500">#{String(pokemon.id).padStart(3, "0")}</p>
        </div>
    );
}
