import { render, screen } from "@testing-library/react";
import TwoPlusTwo from "./TwoPlusTwo";
import userEvent from "@testing-library/user-event";
import { error1 } from "./validate/validate-two-plus-two";

describe("TwoPlusTwo component", () => {
  test("Given the required props, When the component is rendered, Then 'What is 2 + 2' label should be rendered", () => {
    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: () => {},
      validate: () => [],
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    const labelText = screen.getByText("What is 2 + 2?");
    expect(labelText).toBeInTheDocument();
  });

  test("Given the required props, when the component is rendered, Then the correct number of options in the dropdown should be displayed", async () => {
    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: () => {},
      validate: () => [],
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    expect(screen.getAllByRole("option").length).toBe(2);
  });

  test("Given the required props, when the component is rendered, Then the first value in the options list will be displayed", () => {
    const TwoPlusTwoProps = {
      twoPlusTwo: "",
      onChangeTwoPlusTwo: jest.fn(),
      validate: () => [],
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
      validate: () => [],
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

describe("TwoPlusTwo rendering error message test", () => {
  test("Given the required props, When a valid input is passed to the validate function , Then no  error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);
    const TwoPlusTwoProps = {
      twoPlusTwo: "4",
      onChangeTwoPlusTwo: () => {},
      validate: mockValidate,
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    const errorMessage = screen.queryByText(error1);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("Given the required props, When the incorrect answer is selected , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1]);
    const TwoPlusTwoProps = {
      twoPlusTwo: "4",
      onChangeTwoPlusTwo: () => {},
      validate: mockValidate,
    };
    render(<TwoPlusTwo {...TwoPlusTwoProps} />);
    const errorMessage = screen.getByText(error1);
    expect(errorMessage).toBeInTheDocument();
  });
});
