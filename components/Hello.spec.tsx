import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import React from "react";

it('renders "Hello World"', () => {
  render(<Hello />);
  const myElement = screen.getByText("Hello World!");
  expect(myElement).toBeTruthy();
});
