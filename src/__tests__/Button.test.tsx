import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonToTest } from "../components/ButtonToTest";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<ButtonToTest label='Click Me' onClick={() => {}} />);

    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonToTest label='Click Me' onClick={handleClick} />);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
