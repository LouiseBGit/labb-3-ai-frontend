import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Hem</Link>
                </li>
                <li>
                    <Link to="/summarize">Sammanfatta</Link>
                </li>
                <li>
                    <Link to="/agenda">Mötesagenda</Link>
                </li>
                <li>
                    <Link to="/invitation">Mötesinbjudan</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
