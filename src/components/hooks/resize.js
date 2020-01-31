import { useEffect, useState } from "react";

const useListenResize = () => {
  const [heightBrowser, changeHeightBrowser] = useState(
    window.innerHeight / 2 + "px"
  );

  const handleResize = () => {
    changeHeightBrowser(window.innerHeight / 2 + "px");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return heightBrowser;
};

export default useListenResize;
