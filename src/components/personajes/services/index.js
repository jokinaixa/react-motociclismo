import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";
//const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getPersonajes(query, gender) {
  const customGender = gender === "All" ? "" : gender;

  try {
    const response = await axios({
      url: `${baseUrl}/character/?name=${query}&gender=${customGender}`,
      method: "GET"
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getPersonaje(idPersionaje) {
  try {
    const response = await axios({
      url: `${baseUrl}/character/${idPersionaje}`,
      method: "GET"
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getPersonajeByUrl(url) {
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
