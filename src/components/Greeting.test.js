import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("greeting test cases", () => {
  test("hello world testing first test", () => {
    render(<Greeting></Greeting>);
    const hellworldEle = screen.getByText("Hello World", { exact: false });
    expect(hellworldEle).toBeInTheDocument();
  });

  test("let start play test", () => {
    render(<Greeting></Greeting>);
    const playtest = screen.getByText("let start play", { exact: false });
    expect(playtest).toBeInTheDocument();
  });

  test("Play changed test", () => {
    render(<Greeting></Greeting>);

    const ele = screen.getByRole("button");
    userEvent.click(ele);

    const changedplay = screen.getByText("Play changed", { exact: false });
    expect(changedplay).toBeInTheDocument();
  });

  test("text not found test", () => {
    render(<Greeting></Greeting>);

    const ele = screen.getByRole("button");
    userEvent.click(ele);

    const changedplay = screen.queryByText("let start play");
    expect(changedplay).toBeNull();
  });
});
