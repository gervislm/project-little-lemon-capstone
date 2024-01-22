import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import Fetch from "./fetch";

test("Renders the Header heading", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );

  test("Does not render Choose Date heading initially", () => {
    // Render the App component within BrowserRouter
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check that the heading "Choose Date" is not initially present
    const headingElementNew = screen.queryByText("Choose Date");
    expect(headingElementNew).toBeNull();
  });

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = [];
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
});
