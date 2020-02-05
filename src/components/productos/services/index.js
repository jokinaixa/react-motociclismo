import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export async function getCodigos() {
  try {
    const response = await axios(`${baseUrl}/obtenerCodigos.php`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getFamilias(idCodigo) {
  try {
    const response = await axios(
      `${baseUrl}/obtenerFamilias.php?idCodigo=${idCodigo}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getProductos(idCodigo, idFamilia) {
  try {
    const response = await axios(
      `${baseUrl}/obtenerProductos.php?idCodigo=${idCodigo}&idFamilia=${idFamilia}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
