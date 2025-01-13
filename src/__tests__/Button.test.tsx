import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // upewnij się, że jest zaimportowany
import { ButtonToTest } from "../components/ButtonToTest";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<ButtonToTest label='Click Me' onClick={() => {}} />);

    // Sprawdź, czy przycisk wyświetla tekst "Click Me"
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonToTest label='Click Me' onClick={handleClick} />);

    // Kliknij przycisk
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    // Sprawdź, czy funkcja została wywołana raz
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
