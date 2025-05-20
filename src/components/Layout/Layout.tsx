import { Menu } from "../../components/Menu/menu";
import { ReactNode } from "react";

type ILayout = {
    children: ReactNode;
}

const Layout = ({ children}: ILayout) => {
    return (
    <div className="container-fluid">
        <Menu/>
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    </div>
    )
}

export { Layout };