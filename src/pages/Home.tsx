import { useEffect, useState } from "react";
import { HeroSearch } from "../components/HeroSearch";
import { getHeroByName } from "../api/superheroes";
import "../styles/global.scss";
import type { Superhero } from "../interfaces/superhero";

function Home() {
  const [search, setSearch] = useState("");
  const [heroes, setHeroes] = useState<Superhero[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.length > 2) {
      const fetchData = async () => {
        setLoading(true);

        try {
          const response = await getHeroByName(search);

          if (response.results) {
            setHeroes(response.results);
          } else {
            setHeroes([]);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setHeroes([]);
    }
  }, [search]);

  return (
    <>
      <HeroSearch
        name="search-heros"
        placeholder="Busque por um herói (ex: Batman)..."
        value={search}
        onChange={(valor) => setSearch(valor)}
      />

      {loading && <p>Carregando...</p>}

      <div className="heroes-list">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-card">
            <h3>{hero.name}</h3>
          </div>
        ))}
      </div>

      {search.length > 2 && heroes.length === 0 && !loading && (
        <p>Nenhum herói encontrado.</p>
      )}
    </>
  );
}

export default Home;
