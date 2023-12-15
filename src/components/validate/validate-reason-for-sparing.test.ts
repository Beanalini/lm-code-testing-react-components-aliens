import { validateReasonForSparing, error1 } from "./reason-for-sparing";

describe("test validateReasonForSparing function", () => {
  test("Given the required props When the input is the valid number of characters Then the error message array should be empty", () => {
    expect(validateReasonForSparing("We're here in peas...;-)")).toEqual([]);
    expect(
      validateReasonForSparing(
        "We're in need of *** the Daleks have rava8ed our planet"
      )
    ).toEqual([]);
  });

  test("Given the required props When the input is the invalid number of characters Then the error message array should contain an error", () => {
    const testString = [...Array(26).fill("Help! ")].join("");
    expect(validateReasonForSparing("Peas Help")).toEqual([error1]);
    expect(validateReasonForSparing(testString)).toEqual([error1]);
  });
});
