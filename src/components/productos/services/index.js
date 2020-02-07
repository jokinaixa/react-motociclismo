import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export async function obtenerCodigos(tabla) {
  try {
    const response = await axios(
      `${baseUrl}/obtenerCodigos.php?tabla=${tabla}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function obtenerFamilias(tabla, idCodigo) {
  try {
    const response = await axios(
      `${baseUrl}/obtenerFamilias.php?tabla=${tabla}&idCodigo=${idCodigo}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function obtenerProductos(tabla, idCodigo, idFamilia) {
  try {
    const response = await axios(
      `${baseUrl}/obtenerProductos.php?tabla=${tabla}&idCodigo=${idCodigo}&idFamilia=${idFamilia}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function mostrarProducto(tabla, referencia) {
  try {
    const response = await axios(
      `${baseUrl}/mostrarProducto.php?tabla=${tabla}&referencia=${referencia}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
