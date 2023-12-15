import { render, screen, fireEvent } from "@testing-library/react";
import BeingsNumber from "./BeingsNumber";
import userEvent from "@testing-library/user-event";
import { error1, error2 } from "./validate/validate-beings-number";

describe("BeingsNumber component", () => {
  test("Given the required props, When the component is rendered, Then BeingsNumber label should be present", () => {
    const BeingsNumberProps = {
      beingsNumber: "",
      onChangeBeingsNumber: () => {},
      validate: () => [],
    };
    render(<BeingsNumber {...BeingsNumberProps} />);
    const labelText = screen.getByText("Number of beings:");
    expect(labelText).toBeInTheDocument();
  });

  test("Given input props, When the component is rendered, Then the text input field should display the prop value", () => {
    const BeingsNumberProps = {
      beingsNumber: "2000",
      onChangeBeingsNumber: () => {},
      validate: () => [],
    };
    render(<BeingsNumber {...BeingsNumberProps} />);
    const input = screen.getByLabelText("Number of beings:");
    expect(input).toHaveValue("2000");
  });

  test("Given the input props, When text is entered into the input field, Then its onChange function should be called", async () => {
    const mockOnChange = jest.fn();
    const BeingsNumberProps = {
      beingsNumber: "",
      onChangeBeingsNumber: mockOnChange,
      validate: () => [],
    };

    render(<BeingsNumber {...BeingsNumberProps} />);
    const input = screen.getByLabelText("Number of beings:");
    await userEvent.type(input, "2000");
    expect(mockOnChange).toHaveBeenCalled();
    //expect 4 calls to the onChange function for each input letter
    expect(mockOnChange).toHaveBeenCalledTimes(4);
  });

  test("Given the input props, When text is entered into the input field, Then its onChange function passes the correct parameter", () => {
    const mockOnChange = jest.fn();
    const BeingsNumberProps = {
      beingsNumber: "",
      onChangeBeingsNumber: mockOnChange,
      validate: () => [],
    };

    render(<BeingsNumber {...BeingsNumberProps} />);
    const input = screen.getByLabelText("Number of beings:");
    fireEvent.change(input, { target: { value: "5,000,000" } });
    expect(mockOnChange).toBeCalledWith("5,000,000");
  });
});
describe("BeingsNumber rendering error message test", () => {
  test("Given the required props, When a valid input is passed to the validate function , Then no  error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);
    const BeingsNumberProps = {
      beingsNumber: "1000000000",
      onChangeBeingsNumber: () => {},
      validate: mockValidate,
    };
    render(<BeingsNumber {...BeingsNumberProps} />);
    const errorMessage = screen.queryByText(error1 || error2);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("Given the required props, When the number of species is below the minimum allowed number , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error2]);
    const BeingsNumberProps = {
      beingsNumber: "1000",
      onChangeBeingsNumber: jest.fn(),
      validate: mockValidate,
    };
    render(<BeingsNumber {...BeingsNumberProps} />);
    const errorMessage = screen.getByText(error2);
    console.log(error2);
    expect(errorMessage).toBeInTheDocument();
  });
  test("Given the required props, When a special character is included in the input , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1]);
    const BeingsNumberProps = {
      beingsNumber: "20000!!!",
      onChangeBeingsNumber: jest.fn(),
      validate: mockValidate,
    };
    render(<BeingsNumber {...BeingsNumberProps} />);
    const errorMessage = screen.getByText(error1);
    expect(errorMessage).toBeInTheDocument();
  });
});
