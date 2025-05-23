import { screen, render } from '@testing-library/react';
import { Profile } from './Profile';
import { BrowserRouter } from 'react-router-dom';

const mockHistoryPush = jest.fn();
let mockUser =''

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush
    }),
    useParams: () => ({
        user: mockUser
    })
}));


describe ("Profile", () => {
    render (
        <BrowserRouter>
            <Profile/>
        </BrowserRouter>
    )
    it ("Must render the table on the page if user is valid", () => {
        mockUser = 'Gab'
        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(mockHistoryPush).not.toHaveBeenCalled();
    })
    it ("Must redirect to home page if the user is not valid", () => {
        mockUser = "Other-user";
        expect(mockHistoryPush).toHaveBeenCalled();
    })
})