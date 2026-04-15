const token = import.meta.env.VITE_TOKEN;
const BASE_URL = `https://superheroapi.com/api/${token}`;

export const getHeroById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Erro ao buscar herói');
  return response.json();
};

// getHeroById("1").then(console.log).catch(console.error);

export const getHeroByName = async (name) => {
  const response = await fetch(`${BASE_URL}/search/${name}`);
  if (!response.ok) throw new Error("Erro ao buscar herói");
  return response.json();
}

getHeroByName("batman").then(console.log).catch(console.error)