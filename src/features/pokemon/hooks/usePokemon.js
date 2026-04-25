import { useState, useEffect } from "react";

export function usePokemon(limit = 20, offset = 0) {
    const [pokemons, setPokemons] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function fetchPokemons() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                if (!res.ok) throw new Error("Error al obtener los pokémons");
                const data = await res.json();

                setTotal(data.count);
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
    }, [limit, offset]);

    return { pokemons, total, loading, error };
}
