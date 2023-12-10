import { render, screen, fireEvent } from "@testing-library/react";
import BeingsNumber from "./BeingsNumber";
import userEvent from "@testing-library/user-event";

describe("BeingsNumber component", () => {
  test("Given the required props, When the component is rendered, Then BeingsNumber label should be present", () => {
    const BeingsNumberProps = {
      beingsNumber: "",
      onChangeBeingsNumber: () => {},
    };
    render(<BeingsNumber {...BeingsNumberProps} />);
    const labelText = screen.getByText("Number of beings:");
    expect(labelText).toBeInTheDocument();
  });

  test("Given input props, When the component is rendered, Then the text input field should display the prop value", () => {
    const BeingsNumberProps = {
      beingsNumber: "2000",
      onChangeBeingsNumber: () => {},
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
    };

    render(<BeingsNumber {...BeingsNumberProps} />);
    const input = screen.getByLabelText("Number of beings:");
    fireEvent.change(input, { target: { value: "5,000,000" } });
    expect(mockOnChange).toBeCalledWith("5,000,000");
  });
});
