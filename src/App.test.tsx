import { render, screen } from '@testing-library/react';
import App from './App';
import { gitApi } from './api/github';
import {fireEvent} from '@testing-library/react';

describe ('App', ()  => {

  let user = ""
  it ("Must receive data on response, case the user existis", async () => {
    user = "Gabolonhez"
    render (<App/>)

    jest.spyOn(gitApi,"getUser")

    const input = screen.getByRole("textbox", {name: "User"})
    const button = screen.getByRole("button", {name: "Entrar"});

    fireEvent.change(input, {
      target: {value: user}
    })
    
    fireEvent.click(button)

    expect (gitApi.getUser).toHaveBeenCalled()
     
    const response = await gitApi.getUser(user)
    expect(response).toHaveProperty("login")
  })

  it ("Must not receive data on response, case the user doesn't existis", async () => {
  user = "Gabolonhez-enwaewa"
    render (<App/>)

    jest.spyOn(gitApi,"getUser")

    const input = screen.getByRole("textbox", {name: "User"})
    const button = screen.getByRole("button", {name: "Entrar"});

    fireEvent.change(input, {
      target: {value: user}
    })
    
    fireEvent.click(button)

    const response = await gitApi.getUser(user)
    expect(response).toBe(undefined)

})
})