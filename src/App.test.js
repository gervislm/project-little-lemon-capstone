import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";

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
});

describe("Reservation Form HTML validation", () => {
  let availableTimes;
  let mockDispatch;

  beforeEach(() => {
    // Initialize the mock data before each test
    availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    // Initialize a mock dispatch function
    mockDispatch = jest.fn();
  });

  BookingForm.propTypes = {
    availableTimes: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  it("should have required attribute for date input", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("required");
  });

  it("should have required attribute for time select", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    );
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("required");
  });

  it("should have required attribute for occasion select", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    );
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });

  it("should have required attribute for guests slider", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    );
    const guestsSlider = screen.getByLabelText("Number of guests");
    expect(guestsSlider).toHaveAttribute("required");
  });
});
