import {useState} from "react";

export default function Selector({defaultKey, onChangeCallback}) {
    const [key, setKey] = useState(defaultKey ?? 'C')

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

    function changeKey(fonda) {
        setKey(key => fonda)
        onChangeCallback(fonda)
    }

    return (
        <>
            <h1>{key}</h1>
            <ul className='selector'>
                {cycle.map(c =>
                    (<li key={c} onClick={() => {changeKey(c)}}>{c}</li>)
                )}
            </ul>
        </>
    )
}