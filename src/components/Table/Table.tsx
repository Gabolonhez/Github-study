interface ITech {
    tech: string,
    type: string
}

interface ITable {
    data?: ITech[]
}

const Table = ({ data }: ITable) => {
    return (
        <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tecnologia</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data !== undefined && data.map((tech, index) => {
                        return (
                             <tr key={index}>
                                <td>{tech.tech}</td>
                                <td>{tech.type}</td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
    )
}

export { Table };