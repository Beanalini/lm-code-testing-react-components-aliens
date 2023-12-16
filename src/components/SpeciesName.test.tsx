import { render, screen, fireEvent } from "@testing-library/react";
import SpeciesName from "./SpeciesName";
import userEvent from "@testing-library/user-event";
import { error1, error2 } from "./validate/validateSpeciesName";

describe("SpeciesName component", () => {
  test("Given the required props, When the component is rendered, Then Species name label should be present", () => {
    const SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: () => {},
      validate: () => [],
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const labelText = screen.getByText("Species Name");
    expect(labelText).toBeInTheDocument();
  });
  test("Given input props, When the component is rendered, Then the text input field should display the prop value", () => {
    const SpeciesNameProps = {
      speciesName: "Martian",
      onChangeSpeciesName: () => {},
      validate: () => [],
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const input = screen.getByLabelText("Species Name");
    expect(input).toHaveValue("Martian");
  });

  test("Given the input props, When text is entered into the input field, Then its onChange function should be called", async () => {
    const mockOnChange = jest.fn();
    const SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: mockOnChange,
      validate: () => [],
    };

    render(<SpeciesName {...SpeciesNameProps} />);
    const input = screen.getByLabelText("Species Name");
    await userEvent.type(input, "Daleks");
    expect(mockOnChange).toHaveBeenCalled();
    //expect 6 calls to the onChange function for each input letter
    expect(mockOnChange).toHaveBeenCalledTimes(6);
  });

  test("Given the input props, When text is entered into the input field, Then its onChange function passes the correct parameter", () => {
    // const user = userEvent.setup();
    const mockOnChange = jest.fn();
    const SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: mockOnChange,
      validate: () => [],
    };

    render(<SpeciesName {...SpeciesNameProps} />);
    const input = screen.getByLabelText("Species Name");
    fireEvent.change(input, { target: { value: "Daleks" } });
    expect(mockOnChange).toBeCalledWith("Daleks");
  });
});

describe("SpeciesName rendering error message test", () => {
  test("Given the required props, When a valid input is passed to the validate function , Then no  error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);
    const SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: () => {},
      validate: mockValidate,
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const errorMessage = screen.queryByText(error1 || error2);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("Given the required props, When the number of input characters is outside the required range , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error2]);
    const SpeciesNameProps = {
      speciesName: "Io",
      onChangeSpeciesName: jest.fn(),
      validate: mockValidate,
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const errorMessage = screen.getByText(error2);

    expect(errorMessage).toBeInTheDocument();
  });
  test("Given the required props, When a special character is included in the input , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1]);
    const SpeciesNameProps = {
      speciesName: "Daleks!!!",
      onChangeSpeciesName: jest.fn(),
      validate: mockValidate,
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const errorMessage = screen.getByText(error1);
    expect(errorMessage).toBeInTheDocument();
  });

  test("Given the required props, When a special character is included in the input and the number of characters is not within range, Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1, error2]);
    const SpeciesNameProps = {
      speciesName: "I!",
      onChangeSpeciesName: jest.fn(),
      validate: mockValidate,
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const errorMessage = screen.getByText(error2 && error1);
    expect(errorMessage).toBeInTheDocument();
  });
});
