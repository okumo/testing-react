import React from "react";

import { screen, render } from "@testing-library/react";

import { ProductPage } from "./";

/* 1 - Crear un test que falle (RED)
2 - Lo minimo necesario para que el test pase (GREEN)
3 - REFACTORS( clean code, code smells) */

beforeEach(() => render(<ProductPage />));

describe("ProductPage", () => {
  it("must display a title", () => {
    expect(screen.queryByText(/product page/i)).toBeInTheDocument();
  });
});

describe("ProductPage", () => {
  it("must display a name CARRITO", () => {
    expect(screen.queryByText(/carrito/i)).toBeInTheDocument();
  });
});
