import axios from 'axios';
import { gitApi } from './github';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe ('github', () => {
    it ("Must return the login and id of the user", async () => {
            axiosMock.get = jest.fn().mockResolvedValue({data: {login: 'Gab', id: '12345'}})

        const response = await gitApi.getUser('Gab');
        expect(response).toMatchObject({
            login: 'Gab',
            id: '12345'
        })
    })

    it ("Must return the message of user not found", async () => {
        axiosMock.get = jest.fn().mockResolvedValue({data: {
            message: 'Not Found'
        }})

        const response = await gitApi.getUser("invalid-user");
        expect(response).toMatchObject({message: 'Not Found'})
    })
})