import { greet } from "./greet.js";

test("returns 'Hello Jane!' if called greet('Jane')", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});
test("Returns 'Hello stranger' if called greet()", () => {
  const result = greet();
  expect(result).toBe("Hello stranger!");
});
test("Returns 'Hello coach!' if called greet('Thomas')", () => {
  const result = greet("Thomas");
  expect(result).toBe("Hello coach!");
});
