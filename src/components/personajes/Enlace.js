import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Enlace = ({ location }) => {
  useEffect(() => {
    //const arrayDeCadenas = location.url.split("/");
    //const idLocation = arrayDeCadenas.slice(-1);
    console.log(location);
  }, [location]);

  return <Link to={{ pathname: `/lugarFicha/4` }}>{location.name}</Link>;
};

export default Enlace;
