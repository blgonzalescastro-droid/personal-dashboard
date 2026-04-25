import { useState, useEffect } from "react";

export function usePokemon(limit = 20) {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
                if (!res.ok) throw new Error("Error al obtener los pokémons");
                const data = await res.json();

                const details = await Promise.all(
                    data.results.map((p) => fetch(p.url).then((r) => r.json()))
                );
                setPokemons(details);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPokemons();
    }, [limit]);

    return { pokemons, loading, error };
}
