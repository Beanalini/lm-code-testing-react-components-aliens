import { render, screen, fireEvent } from "@testing-library/react";
import PlanetName from "./PlanetName";
import userEvent from "@testing-library/user-event";

describe("PlanetName component", () => {
  test("Given the required props, When the component is rendered, Then Planet name label should be present", () => {
    const PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: Array<string>,
    };
    render(<PlanetName {...PlanetNameProps} />);
    const labelText = screen.getByText("Planet Name");
    expect(labelText).toBeInTheDocument();
  });
  test("Given input props, When the component is rendered, Then the text input field should display the prop value", () => {
    const PlanetNameProps = {
      planetName: "Gallifrey",
      onChangePlanetName: () => {},
      validate: () => [],
    };
    render(<PlanetName {...PlanetNameProps} />);
    const input = screen.getByLabelText("Planet Name");
    expect(input).toHaveValue("Gallifrey");
  });

  test("Given the input props, When text is entered into the input field, Then its onChange function should be called", async () => {
    const mockOnChange = jest.fn();
    const PlanetNameProps = {
      planetName: "",
      onChangePlanetName: mockOnChange,
    };

    render(<PlanetName {...PlanetNameProps} />);
    const input = screen.getByLabelText("Planet Name");
    await userEvent.type(input, "Skaro");
    expect(mockOnChange).toHaveBeenCalled();
    //expect 5 calls to the onChange function for each input letter
    expect(mockOnChange).toHaveBeenCalledTimes(5);
  });

  //could'nt not find the correct matcher function to test passing correct parameter using userEvent.type - had to resort to using fireEvent instead
  test("Given the input props, When text is entered into the input field, Then its onChange function passes the correct parameter", () => {
    const mockOnChange = jest.fn();
    const PlanetNameProps = {
      planetName: "",
      onChangePlanetName: mockOnChange,
    };

    render(<PlanetName {...PlanetNameProps} />);
    const input = screen.getByLabelText("Planet Name");
    fireEvent.change(input, { target: { value: "Algol" } });
    expect(mockOnChange).toBeCalledWith("Algol");
  });
});
