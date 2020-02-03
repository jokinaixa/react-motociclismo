import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";
//const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getEpisodio(idEpisodio) {
  try {
    const response = await axios({
      url: `${baseUrl}/episode/${idEpisodio}`,
      method: "GET"
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getEpisodiojeByUrl(url) {
  try {
    const response = await axios({
      url: `${url}`,
      method: "GET"
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
