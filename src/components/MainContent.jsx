import { NavLink, Outlet } from 'react-router-dom'

export default function MainContent() {

    return <>
        <nav className="nav">
            <NavLink to="degree">Degrés</NavLink>
            <NavLink to="mode">Mode</NavLink>
        </nav>
        <Outlet />
    </>
}