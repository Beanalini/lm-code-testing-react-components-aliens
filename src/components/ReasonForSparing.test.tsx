import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./ReasonForSparing";
import userEvent from "@testing-library/user-event";
import { error1 } from "./validate/reason-for-sparing";

describe("ReasonForSparing component", () => {
  test("Given the required props, When the component is rendered, Then  label text should be rendered", () => {
    const ReasonForSparingProps = {
      reasonForSparing: "",
      onChangeReasonForSparing: () => {},
      validate: () => [],
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const labelText = screen.getByLabelText("Reason for sparing");
    expect(labelText).toBeInTheDocument();
  });

  test("Given the required props, When the component is rendered, Then  the prop value should be displayed", async () => {
    const ReasonForSparingProps = {
      reasonForSparing: "The Daleks have devastated our planet!",
      onChangeReasonForSparing: () => {},
      validate: () => [],
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "The Daleks have devastated our planet!");
    expect(input).toHaveDisplayValue("The Daleks have devastated our planet!");
  });

  test("Given the required props, When the onchange handler function is called, Then  the prop value will change", async () => {
    const mockingFunction = jest.fn();
    const ReasonForSparingProps = {
      reasonForSparing: "The Daleks have devastated our planet!",
      onChangeReasonForSparing: mockingFunction,
      validate: () => [],
    };

    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "The Daleks have devastated our planet!");
    expect(mockingFunction).toHaveBeenCalled();
    expect(mockingFunction).toBeCalledTimes(38);
  });
});

describe("Reasons for Sparing error message test", () => {
  test("Given the required props, When a valid input is passed to the validate function , Then no  error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);
    const ReasonForSparingProps = {
      reasonForSparing: "We're here in peas...;-)w",
      onChangeReasonForSparing: () => {},
      validate: mockValidate,
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const errorMessage = screen.queryByText(error1);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("Given the required props, When an invalid input is passed to the validate function , Then an  error message will be rendered", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([error1]);
    const ReasonForSparingProps = {
      reasonForSparing: "Help!?",
      onChangeReasonForSparing: () => {},
      validate: mockValidate,
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const errorMessage = screen.queryByText(error1);
    expect(errorMessage).toBeInTheDocument();
  });
});
