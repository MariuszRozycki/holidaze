import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // upewnij się, że jest zaimportowany
import { Button } from "../components/Button";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button label='Click Me' onClick={() => {}} />);

    // Sprawdź, czy przycisk wyświetla tekst "Click Me"
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label='Click Me' onClick={handleClick} />);

    // Kliknij przycisk
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    // Sprawdź, czy funkcja została wywołana raz
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
