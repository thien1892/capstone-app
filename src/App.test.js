import { render, screen, fireEvent } from "@testing-library/react";
import BookingFormVer2 from "./components/BookingFormV2";

// test('Renders the BookingForm heading', () => {
//     render(<BookingFormVer2 />);
//     const headingElement = screen.getByRole("button");
//     console.log(headingElement);
//     expect(headingElement).toBeInTheDocument();
// });

test('Test element', () => {
  render(<BookingFormVer2 />);
  const input = screen.getByLabelText("Number of guests:");
  fireEvent.blur(input);

  // console.log(input);
  expect(screen.getByTestId("number")).toHaveTextContent("required");
});

