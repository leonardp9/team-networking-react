import React from "react";

import "./App.css";
import { Appfooter } from "./footer/components";
import AppHeader from "./header";
import { ContentWrapper } from "./main/components";

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <Appfooter />
    </>
  );
}

export default App;
