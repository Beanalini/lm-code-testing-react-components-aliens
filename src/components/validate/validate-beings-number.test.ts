import { validateBeingsNumber, error1, error2 } from "./validate-beings-number";

describe("test validateBeingsNumber", () => {
  test("Given the required props When the input is the a valid number of beings Then the error message array should be empty", () => {
    expect(validateBeingsNumber("1000000000")).toEqual([]);
    expect(validateBeingsNumber("10000000001")).toEqual([]);
  });
  test("Given the required props When the input is invalid number of beings Then the error message array should contain error2", () => {
    expect(validateBeingsNumber("1")).toEqual([error2]);
    expect(validateBeingsNumber("999999999")).toEqual([error2]);
  });

  test("Given the required props When the input includes special characters Then  the error message array should contain error1", () => {
    expect(validateBeingsNumber("1000000000£")).toEqual([error1]);
    expect(validateBeingsNumber("£")).toEqual([error1]);
  });
});
