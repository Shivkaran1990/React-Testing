import Async from "./Async";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Async Component Test", () => {
  test("reder posts if reqeust succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async></Async>);

    const listItemEleents = await screen.findAllByRole("list");
    expect(listItemEleents).not.toHaveLength(0);
  });
});
