import { Link } from "react-router-dom";

const Menu = () => {
    return (
    <nav className="navbar navbar-light navbar-expand-lg bg-success row">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>
                <span className="ml-1 text-light">Dio Study</span>
            </Link>
        </div>
    </nav>
    )
}

export { Menu };