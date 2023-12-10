import { render, screen, fireEvent } from "@testing-library/react";
import SpeciesName from "./SpeciesName";
import userEvent from "@testing-library/user-event";

describe("SpeciesName component", () => {
  test("Given the required props, When the component is rendered, Then Species name label should be present", () => {
    const SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: () => {},
    };
    render(<SpeciesName {...SpeciesNameProps} />);
    const labelText = screen.getByText("Species Name");
    expect(labelText).toBeInTheDocument();
  });
  test("Given input props, When the component is rendered, Then the text input field should display the prop value", () => {
    const SpeciesNameProps = {
      speciesName: "Martian",
      onChangeSpeciesName: () => {},
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
    };

    render(<SpeciesName {...SpeciesNameProps} />);
    const input = screen.getByLabelText("Species Name");
    await userEvent.type(input, "Daleks");
    expect(mockOnChange).toHaveBeenCalled();
    //expect 6 calls to the onChange function for each input letter
    expect(mockOnChange).toHaveBeenCalledTimes(6);
  });

  //could'nt not find the correct matcher function to test passing correct parameter using userEvent.type - had to resort to using fireEvent instead
  test("Given the input props, When text is entered into the input field, Then its onChange function passes the correct parameter", () => {
    // const user = userEvent.setup();
    const mockOnChange = jest.fn();
    const SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: mockOnChange,
    };

    render(<SpeciesName {...SpeciesNameProps} />);
    const input = screen.getByLabelText("Species Name");
    fireEvent.change(input, { target: { value: "Daleks" } });
    expect(mockOnChange).toBeCalledWith("Daleks");
  });
});
