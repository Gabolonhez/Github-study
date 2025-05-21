import React from "react";
import { Layout } from "../components/Layout/Layout";

const Profile = () => {
    return (
        <Layout>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tecnologia</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React</td>
                        <td>Front-end</td>
                    </tr>
                    <tr>
                        <td>Node</td>
                        <td>Backend</td>
                    </tr>
                    <tr>
                        <td>Next</td>
                        <td>Frontend</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
} 

export { Profile };