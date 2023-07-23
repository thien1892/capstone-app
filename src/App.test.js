import { render, screen, fireEvent, wait, waitFor } from "@testing-library/react";
import BookingFormVer2 from "./components/BookingFormV2";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import moment from 'moment'; //"moment": "^2.29.4"

test('Check submit button to be form', () => {
    render(
        <BrowserRouter>
            <BookingFormVer2 />
        </BrowserRouter>
        );
    const headingElement = screen.getByRole("button");
    console.log(headingElement);
    expect(headingElement).toBeInTheDocument();
});


test('Check Number of guests is required', () => {
    const handleSubmit = jest.fn()
    const resDate=moment().subtract(1,'days').format('YYYY-MM-DD'); //date
    const resTime = "17:00";
    const guests = 10;
    const outside = false; //check box
    const occation =  "Birthday";
    render(
        <BrowserRouter>
            <BookingFormVer2 onSubmit={handleSubmit}/>
        </BrowserRouter>
        );

    const user = userEvent.setup()
    user.type(screen.getByTestId("guests"), guests)
    // fireEvent.blur(screen.getByTestId("resDate"));
    // user.type(screen.getByTestId("resTime"), resTime)
    user.click(screen.getByTestId("submit"))

    // expect(screen.getByTestId("guests-error")).toHaveTextContent("guests must be less than or equal to 10");
    console.log(handleSubmit);
    // expect(handleSubmit).toHaveBeenCalledWith({
    //           guests
    //         });
});


test('Check Number of guests is required and between 1 and 10', () => {
    const handleSubmit = jest.fn()
    const resDate=moment().subtract(1,'days').format('YYYY-MM-DD');
    render(
        <BrowserRouter>
            <BookingFormVer2 onSubmit={handleSubmit}/>
        </BrowserRouter>
        );

});
