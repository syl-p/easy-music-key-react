import { NavLink, useParams } from "react-router-dom";

export function ModeDegreeNav() {
    let { key } = useParams()
    return <nav className="nav">
        <NavLink to={`${key ?? 'C'}/degree`}>Degrés</NavLink>
        <NavLink to={`${key ?? 'C'}/mode`}>Mode</NavLink>
    </nav>
}