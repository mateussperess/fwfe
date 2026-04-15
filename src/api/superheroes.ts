import base_url from "../config/url.module";
import type {
  Superhero,
  SuperheroSearchResponse,
} from "../interfaces/superhero";
import axios from "axios";

const token = import.meta.env.VITE_TOKEN;
const url = `${base_url}/${token}`;

export const getHeroById = async (id: string): Promise<Superhero> => {
  try {
    const { data } = await axios.get<Superhero>(`${url}/${id}`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar o herói por ID:", error);
    throw new Error("Não foi possível encontrar o herói.");
  }
};

export const getHeroByName = async (
  name: string,
): Promise<SuperheroSearchResponse> => {
  try {
    const { data } = await axios.get<SuperheroSearchResponse>(
      `${url}/search/${name}`,
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar o herói por nome:", error);
    throw new Error("Erro na busca por nome.");
  }
};

export const getHeroImage = async (id: string): Promise<string> => {
  const { data } = await axios.get(`${url}/${id}/image`);
  return data.image.url;
};
