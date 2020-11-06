import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "./App";

test("renders menu link to map", () => {
  render(<App />);
  const linkToMap = screen.getByText(/Pontos Geográficos/i);
  expect(linkToMap).toBeInTheDocument();
});

test("renders form to insert .csv file path", () => {
  render(<App />);
  const linkToImportForm = screen.getByText(/Importar CSV/i);
  expect(linkToImportForm).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(linkToImportForm, leftClick);

  const formInput = screen.getByPlaceholderText(/URL/i);
  const formButton = screen.getByRole('button');
  expect(formInput).toBeInTheDocument();
  expect(formButton).toBeInTheDocument();
});
