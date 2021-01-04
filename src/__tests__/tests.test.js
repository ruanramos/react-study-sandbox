import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../Counter";
import { Fetcher } from "../components/Fetcher";

afterEach(() => cleanup());

test("Counter", () => {
  render(<Counter />);
  const container = screen.getByTestId("counter-test");

  // Component was rendered
  expect(container).toBeTruthy();

  // Component was rendered correctly
  expect(container.firstChild.innerHTML).toBe("Increase");

  // Counter is counting correctly with clicks
  for (let i = 0; i < 13; i++) {
    fireEvent.click(container.firstChild);
  }
  expect(container.lastChild.innerHTML).toBe("13");
});

test("Fecher", () => {
  render(<Fetcher />);
  const btn = screen.getByRole("button");

  expect(btn).toBeTruthy();
});
