import { render, screen, fireEvent } from "@testing-library/react";
import PlanetName from "./PlanetName";
import userEvent from "@testing-library/user-event";
import { error1, error2 } from "./validate/validate-planet-name";

describe("PlanetName component", () => {
  test("Given the required props, When the component is rendered, Then Planet name label should be present", () => {
    const PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: () => [],
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
      validate: () => [],
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
      validate: () => [],
    };

    render(<PlanetName {...PlanetNameProps} />);
    const input = screen.getByLabelText("Planet Name");
    fireEvent.change(input, { target: { value: "Algol" } });
    expect(mockOnChange).toBeCalledWith("Algol");
  });
});

describe("PlanetName rendering error message test", () => {
  test("Given the required props, When a valid input is passed to the validate function , Then no  error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);
    const PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: mockValidate,
    };
    render(<PlanetName {...PlanetNameProps} />);
    const errorMessage = screen.queryByText(error1 || error2);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("Given the required props, When the number of input characters is outside the required range , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error2]);
    const PlanetNameProps = {
      planetName: "I",
      onChangePlanetName: jest.fn(),
      validate: mockValidate,
    };
    render(<PlanetName {...PlanetNameProps} />);
    const errorMessage = screen.getByText(error2);
    console.log(error2);
    expect(errorMessage).toBeInTheDocument();
  });
  test("Given the required props, When a special character is included in the input , Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1]);
    const PlanetNameProps = {
      planetName: "Mars!!!",
      onChangePlanetName: jest.fn(),
      validate: mockValidate,
    };
    render(<PlanetName {...PlanetNameProps} />);
    const errorMessage = screen.getByText(error1);
    expect(errorMessage).toBeInTheDocument();
  });

  test("Given the required props, When a special character is included in the input and the number of characters is not within range, Then an error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1, error2]);
    const testString = [...Array(5).fill("Tranzalore **")].join("");
    const PlanetNameProps = {
      planetName: testString,
      onChangePlanetName: jest.fn(),
      validate: mockValidate,
    };
    render(<PlanetName {...PlanetNameProps} />);
    const errorMessage = screen.getByText(error2 && error1);
    expect(errorMessage).toBeInTheDocument();
  });
});
