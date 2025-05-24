import { Link } from "react-router-dom";

const Menu = () => {
    return (
    <nav className="navbar navbar-light navbar-expand-lg bg-dark row">
        <div className="container-fluid ">
            <Link className="navbar-brand" to='/'>
                <span className="ml-1 text-light">Github Study</span>
            </Link>
        </div>
    </nav>
    )
}

export { Menu };