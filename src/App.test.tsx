import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const soughtElement = screen.getByText(/To Do List/i);
  expect(soughtElement).toBeInTheDocument();
});
