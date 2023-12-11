import {NavLink, Outlet, useParams} from 'react-router-dom'

export default function MainContent() {
    const { key } = useParams()

    return key && <section>
        <nav className="nav">
            <NavLink to="degree">Degrés</NavLink>
            <NavLink to="mode">Mode</NavLink>
        </nav>
        <Outlet/>
    </section>
}
