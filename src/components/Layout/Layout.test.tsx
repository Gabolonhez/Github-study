import { screen, render } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout',() => {
    render(
    <Layout>Meu app</Layout>
    )

    it("Should render the message my app", () => {
        const app = screen.getByText('Meu app');

        expect(app).toBeInTheDocument();
    })
})