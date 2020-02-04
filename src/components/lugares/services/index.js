import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";
//const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getLugares(query) {
  try {
    const response = await axios({
      url: `${baseUrl}/location/?name=${query}`,
      method: "GET"
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getLugar(idLugar) {
  try {
    const response = await axios(`${baseUrl}/location/${idLugar}`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getLugarByUrl(url) {
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
