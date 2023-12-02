import { NavLink, useParams } from "react-router-dom"

export default function Selector() {
    const { key } = useParams()
    const cycle = [
        'F',
        'C',
        'G',
        'D',
        'A',
        'E',
        'B',
        'B♭',
        'E♭',
        'A♭',
        'D♭',
        'G♭',
        'C♭',
    ]

    const types = [
        'major',
        'minor'
    ]

    if (!cycle.includes(key ?? "C")) {
        throw new Error("Cette tonalité n'existe pas dans notre application.")
    }

    return (
        <div className="selector">
            <div className="selector__head">
                <h1>{key ?? "C"}</h1>
            </div>
            <ul>
                {cycle.map(c =>
                    <li key={c}>
                        <NavLink to={c}>{c}</NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}