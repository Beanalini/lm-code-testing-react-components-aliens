import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./ReasonForSparing";
import userEvent from "@testing-library/user-event";

describe("ReasonForSparing component", () => {
  test("Given the required props, When the component is rendered, Then  label text should be rendered", () => {
    const ReasonForSparingProps = {
      reasonForSparing: "",
      onChangeReasonForSparing: () => {},
    };
    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const labelText = screen.getByLabelText("Reason for sparing");
    expect(labelText).toBeInTheDocument();
  });

  test("Given the required props, When the component is rendered, Then  the prop value should be displayed", async () => {
    const ReasonForSparingProps = {
      reasonForSparing: "The Daleks have devastated our planet!",
      onChangeReasonForSparing: () => {},
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
    };

    render(<ReasonForSparing {...ReasonForSparingProps} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "The Daleks have devastated our planet!");
    expect(mockingFunction).toHaveBeenCalled();
    expect(mockingFunction).toBeCalledTimes(38);
  });
});
