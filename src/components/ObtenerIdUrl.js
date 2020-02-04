const obtenerIdUrl = url => {
  if (url) {
    const arrayDeCadenas = url.split("/");
    const id = arrayDeCadenas.slice(-1);

    return id;
  }
};

export default obtenerIdUrl;
