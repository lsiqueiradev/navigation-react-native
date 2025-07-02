import { Fragment } from "react";

import { StatusBar } from "expo-status-bar";

import { Product } from "./screens/Product";

export function App() {
  return (
    <Fragment>
      <Product />
      <StatusBar style="auto" />
    </Fragment>
  );
}
