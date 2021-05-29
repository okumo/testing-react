import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

/* afterAll(()=>{

}) */

/* afterEach(()=>{
    cleanup()
}) */

test("header renders with correct text", () => {
  const headerElement = getByTestId("header");
  expect(headerElement.textContent).toBe("Counter Component");
});

test("Counter initially starts with text of 0", () => {
  const counterElement = getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
});

test("Input contains initial value of 1", () => {
  const inputElement = getByTestId("input");
  expect(inputElement.value).toBe("1");
});

test("Add button renders with +", () => {
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("Substract button renders with -", () => {
  const subsBtn = getByTestId("substr-btn");
  expect(subsBtn.textContent).toBe("-");
});

test("Should change value of input", () => {
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(inputElement.value).toBe("5");
});

test("click on plus button ads 1 to counter", () => {
  const addbtnEelement = getByTestId("add-btn");
  const counterElement = getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(addbtnEelement);
  expect(counterElement.textContent).toBe("1");
});

test("click on substract button substract 1 to counter", () => {
  const substrBtnElement = getByTestId("substr-btn");
  const counterElement = getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(substrBtnElement);
  expect(counterElement.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly", () => {
  const addbtnEelement = getByTestId("add-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addbtnEelement);
  expect(counterElement.textContent).toBe("5");
});

test("changing input value then clicking on substr btn works correctly", () => {
  const substrBtnElement = getByTestId("substr-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(substrBtnElement);
  expect(counterElement.textContent).toBe("-5");
});

test("adding and then substracting leads to the correct counter number", () => {
  const substrBtnElement = getByTestId("substr-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const addbtnEelement = getByTestId("add-btn");

  fireEvent.change(inputElement, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addbtnEelement);
  fireEvent.click(addbtnEelement);
  fireEvent.click(substrBtnElement);
  fireEvent.click(addbtnEelement);
  fireEvent.click(addbtnEelement);

  expect(counterElement.textContent).toBe("30");
});

test("className should work correctly", () => {
  const substrBtnElement = getByTestId("substr-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const addbtnEelement = getByTestId("add-btn");

  expect(counterElement.className).toBe("");

  fireEvent.change(inputElement, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addbtnEelement);

  expect(counterElement.className).toBe("");

  fireEvent.click(addbtnEelement);
  fireEvent.click(addbtnEelement);

  expect(counterElement.className).toBe("green");

  fireEvent.change(inputElement, {
    target: {
      value: "500",
    },
  });
  fireEvent.click(substrBtnElement);

  expect(counterElement.className).toBe("red");
});
