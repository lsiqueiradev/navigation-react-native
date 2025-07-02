import { Fragment } from "react";

import { StatusBar } from "expo-status-bar";

import { Home } from "./screens/Home";

export function App() {
  return (
    <Fragment>
      <Home />
      <StatusBar style="auto" />
    </Fragment>
  );
}
