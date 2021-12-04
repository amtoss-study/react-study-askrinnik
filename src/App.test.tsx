import { render, screen } from "@testing-library/react";
import App from "App";

test("renders learn react link", () => {
    render(<App />);
    const titleElement = screen.getByText(/Home Task #3/i);
    expect(titleElement).toBeInTheDocument();
});
