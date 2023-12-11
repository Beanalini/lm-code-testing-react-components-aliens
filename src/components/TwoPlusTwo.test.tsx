import { render, screen } from "@testing-library/react";
import TwoPlusTwo from "./TwoPlusTwo";
import userEvent from "@testing-library/user-event";

describe("TwoPlusTwo component", () => {
  test("Given the required props, When the component is rendered, Then it should display the default selected value", () => {
    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: () => {},
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    const labelText = screen.getByText("What is 2 + 2?");
    expect(labelText).toBeInTheDocument();
  });

  test("Given the required props, when the component is rendered, Then the correct number of options in the dropdown should be displayed", async () => {
    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: () => {},
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    expect(screen.getAllByRole("option").length).toBe(2);
  });

  test("Given the required props, when the component is rendered, Then the first value in the options list will be displayed", () => {
    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: jest.fn(),
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    const result = screen.getByRole<HTMLInputElement>("combobox", {
      name: /what is 2 +2?/i,
    });

    expect(result).toHaveValue("4");
  });

  test("Given the required props, when the component is rendered the user selects an option, Then the displayed select option value changes", async () => {
    const mockingFunction = jest.fn();

    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: mockingFunction, // use jest.fn() for the onChangeTwoPlusTwo function
    };

    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    const combobox = screen.getByRole<HTMLInputElement>("combobox", {
      name: /what is 2 +2?/i,
    });
    //tests first option calls event handler
    await userEvent.selectOptions(combobox, "4");
    expect(mockingFunction).toHaveBeenCalled();
    //tests second option calls event handler
    await userEvent.selectOptions(combobox, "Not 4");
    expect(mockingFunction).toHaveBeenCalled();
  });
});
