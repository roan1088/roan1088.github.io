import React, { useEffect } from "react";
import MainHeading from "../../components/MainHeading";

function PageNotFound() {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <MainHeading>4 0 4</MainHeading>
  );
}

export default PageNotFound;