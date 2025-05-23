import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe ("Home", () => {
    it("Must inform the user and direct to the profile page", () => {
        render (
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )


        const user = 'Gab'
        const input = screen.getByRole("textbox", {name: "User"})
        const button = screen.getByRole("button", {name: "Entrar"});

        fireEvent.change(input, {target: {value: 'User'}})
        fireEvent.click(button)
        expect(mockHistoryPush).toHaveBeenCalledWith(`/${user}`)

    })

    it ("Must not redirect to the profile page if the user doesn't inform the name", () => {
        window.alert = jest.fn();

        render (
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )
    
        const button = screen.getByRole("button", {name: "Entrar"});

        fireEvent.click(button)
        expect(mockHistoryPush).not.toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalled();
    })
})