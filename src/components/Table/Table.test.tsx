import { screen, render } from '@testing-library/react';
import { Table } from './Table';

describe('Table',() => {

    const mockData = [
        {   
            tech: "React",
            type: "Frontend"
        },
         {   
            tech: "Angular",
            type: "Frontend"
        },
         {   
            tech: "Node",
            type: "Backend"
        },
    ]

    it("Must show the components on the table", () => {

        render (
             <Table data={mockData}/>
        )   
       
        expect(screen.getAllByRole("row")).toHaveLength(1 + mockData.length);

        it("Must render the table if data is undefined", () => {
            render (
                <Table/>
            )
            expect (screen.getAllByRole("row")).toHaveLength(1);
        })
    })
})