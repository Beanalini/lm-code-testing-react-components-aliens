import { render, screen, fireEvent } from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

describe("W12MForm component", () => {
  test("renders form element", () => {
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect
    const { container } = render(<W12MForm />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element
    expect(container.firstChild).toHaveClass("w12MForm");
  });

  test("GIVEN the W12MForm is rendered, WHEN the submit button is pressed, THEN the DisplayFormInput component will be rendered", async () => {
    render(<W12MForm />);

    const button = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(button);
    expect(screen.getByText("Submitted Data")).toBeInTheDocument();
  });
});
